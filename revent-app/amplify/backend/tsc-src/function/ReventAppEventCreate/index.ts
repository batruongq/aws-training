import {
  AppSyncIdentityCognito,
  AppSyncResolverEvent,
  AppSyncResolverHandler
} from 'aws-lambda';
import { v4 as uuidv4 } from 'uuid';
import { Event, MutationCreateEventArgs } from '@appsync';
import {
  Message,
  LambdaResolverError,
  LambdaResolverErrorType,
  ddbDocClient,
  isEmpty
} from '@app-core';

export const handler: AppSyncResolverHandler<MutationCreateEventArgs, Partial<Event>> = 
  async (event: AppSyncResolverEvent<MutationCreateEventArgs, Record<string, any> | null>) => {
  const { input } = event.arguments;
  const userId: string = (event.identity as AppSyncIdentityCognito)?.claims?.sub;
  const date = new Date();

  if (!input) {
    throw new LambdaResolverError(LambdaResolverErrorType.BadRequest, Message.BadRequestError);
  }

  const { organizationId, name, description, start, end, meetingLink } = input;
  
  if (!(organizationId && name)) {
    throw new LambdaResolverError(LambdaResolverErrorType.BadRequest, Message.BadRequestError);
  }

  try {
    // Just owner of organization can create event for it
    const organizationById = await ddbDocClient.get({
      TableName: process.env.API_REVENTAPPAPI_ORGANIZATIONTABLE_NAME as string,
      Key: {
        id: organizationId,
      }
    }).promise();

    if (isEmpty(organizationById)) {
      throw new LambdaResolverError(LambdaResolverErrorType.NotFound, Message.NotFound);
    }

    const ownerId: string = organizationById.Item?.userId;
    
    if (ownerId !== userId) {
      throw new LambdaResolverError(LambdaResolverErrorType.Unauthorized, Message.Unauthorized);
    }

    const dataInput: Partial<Event> = {
      id: uuidv4(),
      userId,
      name,
      description,
      start,
      end,
      meetingLink,
      createdAt: date.toISOString(),
      updatedAt: date.toISOString(),
    };

    await ddbDocClient.put({
      TableName: process.env.API_REVENTAPPAPI_EVENTTABLE_NAME as string,
      Item: {
        ...dataInput,
        '__typename': 'Event',
      },
    }).promise();

    return dataInput;
  } catch (error) {
    throw new LambdaResolverError(LambdaResolverErrorType.InternalServerError, Message.InternalServerError);
  }
};
