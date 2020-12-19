import * as statusCode from './statusCode';
export class ValidationException extends Error {
  public readonly code?: number;
  constructor(message: string, code?: number) {
    super();
    this.name = 'ValidationException';
    this.message = message;
    this.code = code || statusCode.BAD_REQUEST;
  }
}

export class UnexpectedException extends Error {
  public readonly code?: number;
  constructor(message?: string, code?: number) {
    super();
    this.name = 'UnexpectedException';
    this.message =
      message ||
      'An unexpected error has occur, Please try again or contact the administrator';
    this.code = code || statusCode.INTERNAL_ERROR;
  }
}
export class UnAuthorizedException extends Error {
  public readonly code?: number;
  constructor(message?: string, code?: number) {
    super();
    this.name = 'UnAuthorizedException';
    this.message =
      message ||
      'You are not authorize to perform this action, please log in again';
    this.code = code || statusCode.UNAUTHORIZE;
  }
}
