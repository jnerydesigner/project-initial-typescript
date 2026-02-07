import { HEALTH_REPOSITORY, IHealthRepository } from "@domain/repositories/ihealth.repository";
import { inject, injectable } from "tsyringe";

@injectable()
export class HealthService {
  constructor(
    @inject(HEALTH_REPOSITORY)
    private readonly healthRepository: IHealthRepository,
  ) {}

  async check() {
    return this.healthRepository.check();
  }
}
