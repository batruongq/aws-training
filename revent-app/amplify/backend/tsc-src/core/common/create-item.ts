import { v4 as uuidv4 } from 'uuid';

import { LambdaResolverErrorType } from '../constant/error-type';
import { Message } from '../constant/message';
import { ddbDocClient } from './ddb-doc-client';
import { LambdaResolverError } from './error';
import { AttributeValidationMap, Validator } from './validator';

export interface ICreateItem<TCreateModel, TModel> {
  execute(): Promise<TModel>;
}

export class BaseCreateItemImpl {
  static of<TCreateModel, TModel>(props: {
    tableName: string,
    typeName: string,
    item: TCreateModel,
    validationRules?: AttributeValidationMap,
    customValidator?: (item: TCreateModel) => Promise<void> | void,
  }): ICreateItem<TCreateModel, TModel> {
    return {
      execute: async (): Promise<TModel> => {
        const { tableName, typeName, item, validationRules, customValidator } = props;

        // Validate model if any
        if (validationRules) {
          const isValid = new Validator().validate(item, validationRules);

          if (!isValid) {
            throw new LambdaResolverError(LambdaResolverErrorType.BadRequest, Message.BadRequestError);
          }
        }

        // Do custom validation if any
        await customValidator?.(item);

        // Finished validation, proceed save to database
        const date = new Date();
        const id = uuidv4();

        const createItemInput = {
          ...item,
          id,
          createdAt: date.toISOString(),
          updatedAt: date.toISOString(),
        };
        
        try {
          await ddbDocClient.put({
            TableName: tableName,
            Item: {
              ...createItemInput,
              '__typename': typeName,
            },
          }).promise();

          const getItemOutput = await ddbDocClient.get({
            TableName: tableName,
            Key: {
              id,
            },
          }).promise();

          return getItemOutput.Item as TModel;
        } catch(error) {
          throw new LambdaResolverError(LambdaResolverErrorType.InternalServerError, Message.InternalServerError);
        }
      },
    }
  }
}