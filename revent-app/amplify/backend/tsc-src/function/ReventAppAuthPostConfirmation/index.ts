import { Context, PostConfirmationTriggerEvent } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';

import { handleError, LambdaResolverError, LambdaResolverErrorType, Message } from '@app-core';

var documentClient = new DynamoDB.DocumentClient();

export const handler = async (event: PostConfirmationTriggerEvent, context: Context): Promise<PostConfirmationTriggerEvent> => {
  const date = new Date();

  if (
    event.request.userAttributes.sub &&
    typeof process.env.API_REVENTAPPAPI_USERTABLE_NAME === 'string' 
  ) {
    const params: DynamoDB.DocumentClient.PutItemInput = {
      TableName: process.env.API_REVENTAPPAPI_USERTABLE_NAME,
      Item: {
        'id': event.request.userAttributes.sub,
        '__typename': 'User',
        'name': event.request.userAttributes.name,
        'email': event.request.userAttributes.email,
        'createdAt': date.toISOString(),
        'updatedAt': date.toISOString(),
      },
  };

    try {
      await documentClient.put(params).promise();
    } catch (err) {
      handleError(err);
    }
  } else {
    throw new LambdaResolverError(LambdaResolverErrorType.BadRequest, Message.BadRequestError);
  }

  return event;
};