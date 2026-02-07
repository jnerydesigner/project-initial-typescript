import { HealthController } from '@presenters/controllers/health.controller';
import { Router } from 'express';

export const healthRoutes = Router();

healthRoutes.get('/', HealthController.check);
