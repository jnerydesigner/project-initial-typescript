import express from "express";
import "@infrastructure/containers";
import { healthRoutes } from "@presenters/routes/health.route";
import swaggerUi from "swagger-ui-express";
import { openapiSpecification } from "./app/openapi";
import { authRoutes } from "@presenters/routes/auth.route";

export function createApp() {
  const app = express();

  app.use(express.json());

  app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));
  app.use("/health", healthRoutes);
  app.use("/auth", authRoutes);

  return app;
}
