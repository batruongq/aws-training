import {
  AppSyncIdentityCognito,
  AppSyncResolverEvent,
} from 'aws-lambda';
import {
  Organization,
  MutationCreateOrganizationArgs,
  CreateOrganizationInput
} from '@appsync';
import {
  Message,
  LambdaResolverError,
  LambdaResolverErrorType,
  ddbDocClient,
  BaseCreateItemImpl,
  ValidationRules
} from '@app-core';

type CreateOrgInput = CreateOrganizationInput & { userId: string; };

export const handler = async (event: AppSyncResolverEvent<MutationCreateOrganizationArgs, Record<string, any> | null>) => {
  const userId: string = (event.identity as AppSyncIdentityCognito)?.claims?.sub;
  const { input } = event.arguments;

  const duplicateValidator = async (item: CreateOrgInput) => {
    try {
      // Add item to validation table, this help prevent a user create organization duplicate name
      await ddbDocClient.put({
        TableName: process.env.API_REVENTAPPAPI_ORGANIZATIONVALIDATIONTABLE_NAME as string,
        Item: {
          userId: item.userId,
          name: item.name,
        },
        ConditionExpression: 'attribute_not_exists(userId) AND attribute_not_exists(#name)',
        ExpressionAttributeNames: { '#name': 'name'},
      }).promise();
    } catch(err) {
      throw new LambdaResolverError(LambdaResolverErrorType.Duplicated, Message.Duplicated); 
    }
  }

  const createItem = BaseCreateItemImpl.of<CreateOrgInput, Organization>({
    tableName: process.env.API_REVENTAPPAPI_ORGANIZATIONVALIDATIONTABLE_NAME as string,
    typeName: 'Organization',
    item: {
      ...input,
      userId,
    } as CreateOrgInput,
    validationRules: {
      name: [ValidationRules.REQUIRED]
    },
    customValidator: duplicateValidator
  });

  const output = createItem.execute();

  return output;
};
