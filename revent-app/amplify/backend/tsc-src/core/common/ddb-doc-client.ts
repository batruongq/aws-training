import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export const ddbDocClient = new DocumentClient({
  // Whether to automatically convert empty strings, blobs, and sets to `null`
  convertEmptyValues : true,
  // Whether to return numbers as a string instead of converting them to native JavaScript numbers
  wrapNumbers: true,
});
