import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import UserRouter from './components/users/usersRoute';

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/v1/users', UserRouter);

export default app;
