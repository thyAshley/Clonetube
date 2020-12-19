import { NextFunction, Request, Response } from 'express';

class ResponseError extends Error {
  code: number;
  constructor(code: number) {
    super();
    this.code = code;
  }
}
export const ErrorMiddleware = async (
  err: ResponseError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(err.code);
  return res.send({
    name: err.name,
    message: err.message,
    time: Date.now(),
  });
};
