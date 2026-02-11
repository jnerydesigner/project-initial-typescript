import { Router } from "express";
import { container } from "tsyringe";
import { AuthController } from "@presenters/controllers/auth.controller";

import { loginSchema } from "@appplication/dtos/login.dto";
import { validateBody } from "@infrastructure/middlewares/validation.middleware";

export const authRoutes = Router();

const authController = container.resolve(AuthController);

authRoutes.post("/login", validateBody(loginSchema), authController.login.bind(authController));
