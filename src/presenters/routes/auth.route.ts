import { Router } from "express";
import { container } from "tsyringe";
import { AuthController } from "@presenters/controllers/auth.controller";
import { authMiddlewareGateway } from "@infrastructure/auth/auth.middleware";

export const authRoutes = Router();

const authController = container.resolve(AuthController);

authRoutes.post(
  "/login",
  authMiddlewareGateway(AuthController.prototype, "login"),
  authController.login.bind(authController),
);
