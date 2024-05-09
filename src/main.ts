import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import {IS_PRODUCTION, PORT} from '$constants/env';
import router from './router';
import StepStorage from '$services/Storage';

const app = express();

app.use(express.json());
app.use(morgan(IS_PRODUCTION ? 'combined' : 'dev'));
app.use(cors());

app.get('/', (_, res) => res.send({message: 'DSA Board API'}));
app.get('/api/', (_, res) => res.send({message: 'DSA Board API'}));
app.get('/api/ping', (_, res) => res.send({message: 'pong'}));

app.use('/api', router);

const server = app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

process.addListener('SIGINT', () => {
  console.log('SIGINT received');
  StepStorage.timeouts.forEach(id => clearTimeout(id));
  server.close(() => console.log('server closed'));
});

process.addListener('SIGTERM', () => {
  console.log('SIGTERM received');
  StepStorage.timeouts.forEach(id => clearTimeout(id));
  server.close(() => console.log('server closed'));
});
