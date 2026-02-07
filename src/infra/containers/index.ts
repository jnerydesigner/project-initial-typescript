import { HEALTH_REPOSITORY, IHealthRepository } from "@domain/repositories/ihealth.repository";
import { HealthRepository } from "@infrastructure/repositories/health.repository";
import { container } from "tsyringe";

container.register<IHealthRepository>(HEALTH_REPOSITORY, {
  useClass: HealthRepository,
});
