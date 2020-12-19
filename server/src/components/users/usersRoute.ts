import express from 'express';
import { googleAuthMiddleware } from '../../middlewares/googleAuthMiddleware';

import * as UserController from './usersController';

const UserRouter = express.Router();

// Route: /Api/v1/users

UserRouter.post('/signin', googleAuthMiddleware, UserController.signin);

export default UserRouter;
