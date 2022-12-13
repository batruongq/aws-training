import {
  AppSyncIdentityCognito,
  AppSyncResolverEvent,
} from 'aws-lambda';
import { Event, CreateEventInput, MutationCreateEventArgs } from '@appsync';
import {
  Message,
  LambdaResolverError,
  LambdaResolverErrorType,
  ddbDocClient,
  isEmpty,
  BaseCreateItemImpl,
  ValidationRules
} from '@app-core';

type CreateEventInputMap = CreateEventInput & { userId: string; };

export const handler = async (event: AppSyncResolverEvent<MutationCreateEventArgs, Event>) => {
  const { input } = event.arguments;
  const userId: string = (event.identity as AppSyncIdentityCognito)?.claims?.sub;

  // Just owner of organization can create event for it
  const isOwnerValidator = async (item: CreateEventInputMap) => {
    try {
      const organizationById = await ddbDocClient.get({
        TableName: process.env.API_REVENTAPPAPI_ORGANIZATIONTABLE_NAME as string,
        Key: {
          id: item.organizationId,
        }
      }).promise();
  
      if (isEmpty(organizationById)) {
        throw new LambdaResolverError(LambdaResolverErrorType.NotFound, Message.NotFound);
      }
  
      const ownerId: string = organizationById.Item?.userId;
      
      if (ownerId !== userId) {
        throw new LambdaResolverError(LambdaResolverErrorType.Unauthorized, Message.Unauthorized);
      }
    } catch(err) {
      throw new LambdaResolverError(LambdaResolverErrorType.InternalServerError, Message.InternalServerError); 
    }
  }

  const createItem = BaseCreateItemImpl.of<CreateEventInputMap, Event>({
    tableName: process.env.API_REVENTAPPAPI_EVENTTABLE_NAME as string,
    typeName: 'Event',
    item: {
      ...input,
      userId,
    } as CreateEventInputMap,
    validationRules: {
      organizationId: [ValidationRules.REQUIRED],
      name: [ValidationRules.REQUIRED]
    },
    customValidator: isOwnerValidator
  });

  const output: Event = await createItem.execute();

  return output;
};
