import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { logger } from '@/common/config';
import { globalErrorHandle } from '@/common/middleware';

function configureApp(app: express.Application) {
  // express json and urlencoded
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // logger
  app.use(logger.httpExpress);

  // cors
  app.use(
    cors({
      origin: ['http://localhost:3000', '*'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      preflightContinue: true,
      optionsSuccessStatus: 204,
      credentials: true,
    })
  );

  //  cookies
  app.use(cookieParser());

  //  helmet
  app.use(helmet());

  //  compression
  app.use(compression());

  // routes

  // health check
  app.get('/', async (req, res, next) => {
    res.status(200).json({
      message: 'server is running',
    });
  });

  // 404 error handler
  app.use((req, res, next) => {
    res.status(404).json({
      message: 'Not Found',
    });
  });

  // global error handler
  app.use(globalErrorHandle);
}

export default configureApp;
