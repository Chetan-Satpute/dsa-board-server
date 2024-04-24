import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import {IS_PRODUCTION, PORT} from '$constants/env';
import getRandomStructureController from '$controllers/getRandomStructureController';

const app = express();

app.use(express.json());
app.use(morgan(IS_PRODUCTION ? 'combined' : 'dev'));
app.use(cors());

app.get('/', (_, res) => res.send({message: 'DSA Board API'}));
app.get('/api/', (_, res) => res.send({message: 'DSA Board API'}));

app.get('/:structureId/random', getRandomStructureController);

const server = app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

process.addListener('SIGINT', () => {
  console.log('SIGINT received');
  server.close(() => console.log('server closed'));
});

process.addListener('SIGTERM', () => {
  console.log('SIGTERM received');
  server.close(() => console.log('server closed'));
});
