import { authMiddleware } from "@infrastructure/auth/auth.middleware";
import { HealthController } from "@presenters/controllers/health.controller";
import { Router } from "express";
import { container } from "tsyringe";

export const healthRoutes = Router();

const healthController = container.resolve(HealthController);

healthRoutes.get("/", authMiddleware(), healthController.handler.bind(healthController));
