import {
  AppSyncIdentityCognito,
  AppSyncResolverEvent,
  AppSyncResolverHandler
} from 'aws-lambda';
import { v4 as uuidv4 } from 'uuid';
import { Organization, MutationCreateOrganizationArgs } from '@appsync';
import {
  Message,
  LambdaResolverError,
  LambdaResolverErrorType,
  ddbDocClient,
  handleError,
} from '@app-core';

export const handler: AppSyncResolverHandler<MutationCreateOrganizationArgs, Partial<Organization>> = 
  async (event: AppSyncResolverEvent<MutationCreateOrganizationArgs, Record<string, any> | null>) => {
  const userId: string = (event.identity as AppSyncIdentityCognito)?.claims?.sub;
  const { input } = event.arguments;
  const date = new Date();

  if (!input) {
    throw new LambdaResolverError(LambdaResolverErrorType.BadRequest, Message.BadRequestError);
  }

  const { name, description } = input;

  // Validation required fields
  if (!name) {
    throw new LambdaResolverError(LambdaResolverErrorType.BadRequest, Message.BadRequestError);
  }

  try {
    // Add item to validation table, this help prevent a user create organization duplicate name
    await ddbDocClient.put({
      TableName: process.env.API_REVENTAPPAPI_ORGANIZATIONVALIDATIONTABLE_NAME as string,
      Item: {
        userId,
        name,
      },
      ConditionExpression: 'attribute_not_exists(userId) AND attribute_not_exists(#name)',
      ExpressionAttributeNames: { '#name': 'name'},
    }).promise();

    const dataInput: Partial<Organization> = {
      id: uuidv4(),
      userId,
      name,
      description,
      createdAt: date.toISOString(),
      updatedAt: date.toISOString(),
    };

    await ddbDocClient.put({
      TableName: process.env.API_REVENTAPPAPI_ORGANIZATIONTABLE_NAME as string,
      Item: {
        ...dataInput,
        '__typename': 'Organization',
      },
    }).promise();

    return dataInput;
  } catch (error: any) {
    handleError(error);
  }
};
