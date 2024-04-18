import {startServer, closeServer} from './server';

const server = startServer();

['SIGTERM', 'SIGINT'].forEach(signal =>
  process.on(signal, () => {
    console.log(`${signal} signal received`);
    closeServer(server);
  })
);
