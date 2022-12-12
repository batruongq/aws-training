import {
  AppSyncIdentityCognito,
  AppSyncResolverEvent,
  AppSyncResolverHandler
} from 'aws-lambda';
import { MutationDeleteEventArgs } from '@appsync';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import {
  Message,
  LambdaResolverError,
  LambdaResolverErrorType,
  ddbDocClient,
  isEmpty
} from '@app-core';

export const handler: AppSyncResolverHandler<MutationDeleteEventArgs, void> = 
  async (event: AppSyncResolverEvent<MutationDeleteEventArgs, Record<string, any> | null>) => {
  const { input } = event.arguments;
  const userId: string = (event.identity as AppSyncIdentityCognito)?.claims?.sub;

  if (!input || !input.id) {
    throw new LambdaResolverError(LambdaResolverErrorType.BadRequest, Message.BadRequestError);
  }

  // Validate item existing
  const getItemInput: DocumentClient.GetItemInput = {
    TableName: process.env.API_REVENTAPPAPI_EVENTTABLE_NAME as string,
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
      TableName: process.env.API_REVENTAPPAPI_EVENTTABLE_NAME as string,
      Key: {
        'id': input.id
      }
    }).promise();
  } catch (error) {
    throw new LambdaResolverError(LambdaResolverErrorType.InternalServerError, Message.InternalServerError);
  }
};
