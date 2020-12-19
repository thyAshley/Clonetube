import { NextFunction, Request, Response } from 'express';

import User from './usersModel';
import * as statusCode from '../utility/statusCode';
import * as userServices from './usersService';

export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, email, googleID } = req.body;

  try {
    await userServices.createUser;
    res.status(statusCode.OK).send('User inserted into database');
  } catch (error) {
    console.log(error);
  }
};
