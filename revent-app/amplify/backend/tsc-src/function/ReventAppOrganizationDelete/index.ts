import {
  AppSyncIdentityCognito,
  AppSyncResolverEvent,
  AppSyncResolverHandler
} from 'aws-lambda';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { MutationDeleteOrganizationArgs } from '@appsync';
import {
  Message,
  LambdaResolverError,
  LambdaResolverErrorType,
  ddbDocClient,
  isEmpty
} from '@app-core';

export const handler: AppSyncResolverHandler<MutationDeleteOrganizationArgs, void> = 
  async (event: AppSyncResolverEvent<MutationDeleteOrganizationArgs, Record<string, any> | null>) => {
  const { input } = event.arguments;
  const userId: string = (event.identity as AppSyncIdentityCognito)?.claims?.sub;

  if (!input || !input.id) {
    throw new LambdaResolverError(LambdaResolverErrorType.BadRequest, Message.BadRequestError);
  }

  // Validate item existing
  const getItemInput: DocumentClient.GetItemInput = {
    TableName: process.env.API_REVENTAPPAPI_ORGANIZATIONTABLE_NAME as string,
    Key: {
      'id': input.id
    },
  };

  const itemById = await ddbDocClient.get(getItemInput).promise();

  if (isEmpty(itemById)) {
    throw new LambdaResolverError(LambdaResolverErrorType.NotFound, Message.NotFound);
  }

  // Just owner has permission to update
  if (itemById.Item?.userId !== userId) {
    throw new LambdaResolverError(LambdaResolverErrorType.Unauthorized, Message.Unauthorized);
  }

  try {
    await ddbDocClient.delete({
      TableName: process.env.API_REVENTAPPAPI_ORGANIZATIONTABLE_NAME as string,
      Key: {
        'id': input.id
      }
    }).promise();

    // Do remove item from OrganizationValidation table
    await ddbDocClient.delete({
      TableName: process.env.API_REVENTAPPAPI_ORGANIZATIONVALIDATIONTABLE_NAME as string,
      Key: {
        userId,
        name: itemById.Item.name,
      }
    }).promise();
  } catch (error) {
    throw new LambdaResolverError(LambdaResolverErrorType.InternalServerError, Message.InternalServerError);
  }
};
