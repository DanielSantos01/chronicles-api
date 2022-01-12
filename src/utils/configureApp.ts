import express, { Express } from 'express';
import { resolve } from 'path';
import { booksRoutes, homeRoutes, charactersRoutes } from '../routes/index.routes';

const configureApp = (): Express => {
  const app = express();

  app.use(booksRoutes);
  app.use(homeRoutes);
  app.use(charactersRoutes);

  app.set('views', resolve(__dirname, '..', 'views'));
  app.set('view engine', 'ejs');

  return app;
};

export default configureApp;
