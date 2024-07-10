import http from 'http';
import express from 'express';
import { Server } from 'socket.io';
import { configEnv, logger } from '@/common/config';

// import app and socket
import configureApp from './app';
import configureSocket from './socket';

// create app
const app = express() as express.Application;
// create server
const server = http.createServer(app);
// create socket
const io = new Server(server);
// configure app and socket
configureApp(app);
configureSocket(io);

// listen to server
server.listen(configEnv.PORT, () => {
  logger.info(`Server is running on port ${configEnv.PORT}`);
});
