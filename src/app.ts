import express from 'express';
import { logger } from '@/common/config';
import { globalErrorHandle } from '@/common/middleware';
import { HttpError } from '@/common/error';

function configureApp(app: express.Application) {
  // express json and urlencoded
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // logger
  app.use(logger.httpExpress);

  // get home
  app.get('/', (req, res, next) => {
    return next(new HttpError('Http error', 401));
    res.send('Hello World');
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
