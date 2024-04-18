import express from 'express';
import morgan from 'morgan';

import {IS_DEVELOPMENT} from './env';

const app = express();

if (IS_DEVELOPMENT) {
  app.use(morgan('dev'));
}

app.get('/', (_, res) => res.send({message: 'DSA Board API'}));

export default app;
