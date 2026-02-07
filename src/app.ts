import { healthRoutes } from "@presenters/routes/health.route";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { openapiSpecification } from "./app/openapi";

export function createApp() {
  const app = express();

  app.use(express.json());

  app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));
  app.use("/health", healthRoutes);

  return app;
}
