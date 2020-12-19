import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { ValidationException } from '../utility/ErrorService';

import * as statusCode from '../utility/statusCode';
import * as userServices from './usersService';

export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new ValidationException('faield'));
  }
  const { name, email, googleId } = res.locals.payload;
  console.log(name, email, googleId);
  try {
    await userServices.createUser(name, email, googleId);
    res.status(statusCode.OK).send('Success');
  } catch (error) {
    next(error);
  }
};
