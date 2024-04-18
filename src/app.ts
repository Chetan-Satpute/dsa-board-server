import express from 'express';
import morgan from 'morgan';

import {IS_DEVELOPMENT} from './env';
import apiRouter from './routes';

const app = express();

if (IS_DEVELOPMENT) {
  app.use(morgan('dev'));
}

app.get('/', (_, res) => res.send({message: 'DSA Board API'}));

app.use('/api', apiRouter);

export default app;
