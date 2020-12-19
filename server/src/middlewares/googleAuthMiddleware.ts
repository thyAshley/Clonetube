import { NextFunction, Request, Response } from 'express';
import { OAuth2Client } from 'google-auth-library';
import {
  UnAuthorizedException,
  UnexpectedException,
  ValidationException,
} from '../components/utility/ErrorService';

const client = new OAuth2Client(
  '145118799853-0vttp06fqdoca0vh2a235h0ntr0tmeuk.apps.googleusercontent.com',
);

export const googleAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { accessToken, googleId } = req.body;
  if (!accessToken) {
    return next(
      new ValidationException('The credentials you have provided is not valid'),
    );
  }
  try {
    const ticket = await client.verifyIdToken({
      idToken: accessToken,
      audience: '407408718192.apps.googleusercontent.com',
    });

    const payload = ticket.getPayload();
    res.locals.payload = {
      email: payload?.email,
      name: payload?.name,
      googleId: googleId,
    };
    next();
  } catch (error) {
    console.log(error);
    if (['SyntaxError', 'Error', 'TypeError'].includes(error.name)) {
      return next(new UnAuthorizedException());
    }
    return next(new UnexpectedException());
  }
};
