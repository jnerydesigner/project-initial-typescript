import { healthRoutes } from '@presenters/routes/health.route';
import express from 'express';

export function createApp() {
  const app = express();

  app.use(express.json());

  app.use('/health', healthRoutes);

  return app;
}
