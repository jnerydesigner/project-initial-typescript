import { HealthController } from '@presenters/controllers/health.controller';
import { Router } from 'express';

export const healthRoutes = Router();

// A rota raiz do router
healthRoutes.get('/', HealthController.check);
