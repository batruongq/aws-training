import { ErrorType } from 'aws-sdk/clients/es';

export class LambdaResolverError extends Error {
  readonly type: ErrorType;

  constructor(type: ErrorType, message: string) {
    super(message);

    Object.setPrototypeOf(this, LambdaResolverError.prototype);

    this.type = type;
    this.message = message;
  }
}
