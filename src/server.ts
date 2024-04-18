import {Server} from 'http';

import app from './app';
import {PORT} from './env';

export function startServer() {
  const server = app.listen(PORT, () => {
    console.log(`🚀 listening on port ${PORT}`);
  });

  return server;
}

export function closeServer(server: Server) {
  server.close(() => console.log('🛑 server closed'));
}
