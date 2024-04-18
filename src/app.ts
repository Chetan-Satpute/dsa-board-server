import express from 'express';
import morgan from 'morgan';

import {IS_DEVELOPMENT} from './env';

const app = express();

if (IS_DEVELOPMENT) {
  app.use(morgan('dev'));
}

export default app;
