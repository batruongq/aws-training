import { LambdaResolverErrorCode } from '../constant/error-code';
import { LambdaResolverErrorType } from '../constant/error-type';
import { Message } from '../constant/message';
import { LambdaResolverError } from './error';

export function handleError(error: any): void {
  if (error.code === LambdaResolverErrorCode.ConditionalCheckFailed) {
    throw new LambdaResolverError(LambdaResolverErrorType.ConditionalCheckFailed, Message.ConditionalCheckFailed);
  }

  throw new LambdaResolverError(LambdaResolverErrorType.InternalServerError, Message.InternalServerError);
}
