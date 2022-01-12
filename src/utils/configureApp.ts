import express, { Express } from 'express';
import { BooksRoutes } from '../routes/index.routes';

const configureApp = (): Express => {
  const app = express();
  app.use(BooksRoutes);

  return app;
};

export default configureApp;
