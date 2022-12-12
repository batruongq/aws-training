import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export type UpdateExpression = {
  UpdateExpression: string,
  ExpressionAttributeNames: DocumentClient.ExpressionAttributeValueMap | undefined,
  ExpressionAttributeValues: DocumentClient.ExpressionAttributeValueMap | undefined,
}

export function getUpdateExpression(input: any): UpdateExpression {
  const updateItem = {
    ...input,
    updatedAt: new Date().toISOString(),
  };

  const expressionAttributes: DocumentClient.ExpressionAttributeValueMap = {};
  const expressionAttributeValues: DocumentClient.ExpressionAttributeValueMap = {};

  const keys = Object.keys(updateItem);

  const updateExpressionsMap = keys.map((key) => {
    expressionAttributes[`#${key}`] = key; 
    expressionAttributeValues[`:${key}`] = updateItem[key];
    
    return `#${key} = :${key}`;
  });

  const updateExpression: string = `SET ${updateExpressionsMap.join(',')}`;

  return {
    UpdateExpression: updateExpression,
    ExpressionAttributeNames: expressionAttributes,
    ExpressionAttributeValues: expressionAttributeValues,
  };
}
