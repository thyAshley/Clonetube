import express from 'express';

import * as UserController from './usersController';

const UserRouter = express.Router();

UserRouter.post('/signin', UserController.signin);

export default UserRouter;
