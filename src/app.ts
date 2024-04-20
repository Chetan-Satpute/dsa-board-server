import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import {IS_DEVELOPMENT} from './env';
import apiRouter from './routes';

const app = express();

app.use(cors());

if (IS_DEVELOPMENT) {
  app.use(morgan('dev'));
}

app.get('/', (_, res) => res.send({message: 'DSA Board API'}));

app.use('/api', apiRouter);

export default app;
