import {
  AppSyncIdentityCognito,
  AppSyncResolverEvent,
  AppSyncResolverHandler
} from 'aws-lambda';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { MutationUpdateOrganizationArgs, Organization } from '@appsync';
import {
  Message,
  LambdaResolverError,
  LambdaResolverErrorType,
  ddbDocClient,
  isEmpty,
  getUpdateExpression
} from '@app-core';

export const handler: AppSyncResolverHandler<MutationUpdateOrganizationArgs, DocumentClient.AttributeMap | undefined> = 
  async (event: AppSyncResolverEvent<MutationUpdateOrganizationArgs, Record<string, any> | null>) => {
  const { input } = event.arguments;
  const userId: string = (event.identity as AppSyncIdentityCognito)?.claims?.sub;
  const date = new Date();

  if (!input || !input.id) {
    throw new LambdaResolverError(LambdaResolverErrorType.BadRequest, Message.BadRequestError);
  }

  const id: string = input.id;

  // Check item existing
  const itemById = await ddbDocClient.get({
    TableName: process.env.API_REVENTAPPAPI_ORGANIZATIONTABLE_NAME as string,
    Key: {
      id
    },
  }).promise();

  if (isEmpty(itemById)) {
    throw new LambdaResolverError(LambdaResolverErrorType.NotFound, Message.NotFound);
  }

  const currentItem = itemById.Item as Organization;
  const isNameChange = currentItem.name !== input.name; 

  // Prevent update an org archived
  if (currentItem.archived) {
    throw new LambdaResolverError(LambdaResolverErrorType.Archived, Message.Archived);
  }

  // Just owner has permission to update
  if (currentItem.userId !== userId) {
    throw new LambdaResolverError(LambdaResolverErrorType.Unauthorized, Message.Unauthorized);
  }

  // Prevent a user update organization name duplicate
  if (isNameChange) {
    const itemByName = await ddbDocClient.get({
      TableName: process.env.API_REVENTAPPAPI_ORGANIZATIONVALIDATIONTABLE_NAME as string,
      Key: {
        userId,
        name: input.name,
      }
    }).promise();
  
    if (!isEmpty(itemByName)) {
      throw new LambdaResolverError(LambdaResolverErrorType.Duplicated, Message.Duplicated);
    }
  }
  
  try {
    const { UpdateExpression, ExpressionAttributeNames, ExpressionAttributeValues } = getUpdateExpression(input);

    const putItemOutput = await ddbDocClient.update({
      TableName: process.env.API_REVENTAPPAPI_ORGANIZATIONTABLE_NAME as string,
      Key: {
        id,
      },
      ReturnValues: 'ALL_NEW',
      UpdateExpression,
      ExpressionAttributeNames,
      ExpressionAttributeValues
    }).promise();

    // If name change, update it to OrganizationValidation table
    if (isNameChange) {
      await ddbDocClient.delete({
        TableName: process.env.API_REVENTAPPAPI_ORGANIZATIONVALIDATIONTABLE_NAME as string,
        Key: {
          userId,
          name: currentItem.name,
        }
      }).promise();
      await ddbDocClient.put({
        TableName: process.env.API_REVENTAPPAPI_ORGANIZATIONVALIDATIONTABLE_NAME as string,
        Item: {
          userId,
          name: input.name,
        }
      }).promise();
    }

    return putItemOutput.Attributes;
  } catch (error) {
    throw new LambdaResolverError(LambdaResolverErrorType.InternalServerError, Message.InternalServerError);
  }
};
