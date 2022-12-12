import {
  AppSyncIdentityCognito,
  AppSyncResolverEvent,
  AppSyncResolverHandler
} from 'aws-lambda';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { MutationUpdateEventArgs } from '@appsync';
import {
  Message,
  LambdaResolverError,
  LambdaResolverErrorType,
  ddbDocClient,
  isEmpty
} from '@app-core';

export const handler: AppSyncResolverHandler<MutationUpdateEventArgs, DocumentClient.AttributeMap | undefined> = 
  async (event: AppSyncResolverEvent<MutationUpdateEventArgs, Record<string, any> | null>) => {
  const { input } = event.arguments;
  const userId: string = (event.identity as AppSyncIdentityCognito)?.claims?.sub;
  const date = new Date();

  if (!input) {
    throw new LambdaResolverError(LambdaResolverErrorType.BadRequest, Message.BadRequestError);
  }

  const { name, description, start, end, meetingLink } = input;

  if (!name) {
    throw new LambdaResolverError(LambdaResolverErrorType.BadRequest, Message.BadRequestError);
  }

  // Validate item existing
  const itemById = await ddbDocClient.get({
    TableName: process.env.API_REVENTAPPAPI_EVENTTABLE_NAME as string,
    Key: {
      id: input.id
    },
  }).promise();

  if (isEmpty(itemById)) {
    throw new LambdaResolverError(LambdaResolverErrorType.NotFound, Message.NotFound);
  }

  // Just owner has permission to update
  if (itemById.Item?.userId !== userId) {
    throw new LambdaResolverError(LambdaResolverErrorType.Unauthorized, Message.Unauthorized);
  }

  try {
    const putItemOutput = await ddbDocClient.update({
      TableName: process.env.API_REVENTAPPAPI_EVENTTABLE_NAME as string,
      Key: {
        id: input.id,
      },
      UpdateExpression: 'SET #name = :name, #description = :description, #updatedAt = :updatedAt',
      ExpressionAttributeNames: {
        '#name': 'name',
        '#description': 'description',
        '#updatedAt': 'updatedAt',
      },
      ExpressionAttributeValues: {
        ':name': name,
        ':description': description,
        ':updatedAt': date.toISOString()
      },
      ReturnValues: 'ALL_NEW',
    }).promise();

    return putItemOutput.Attributes;
  } catch (error) {
    throw new LambdaResolverError(LambdaResolverErrorType.InternalServerError, Message.InternalServerError);
  }
};
