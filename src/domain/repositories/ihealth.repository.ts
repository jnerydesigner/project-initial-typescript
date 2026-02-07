export interface IHealthRepository {
  check(): { status: string; timestamp: string };
}

export const HEALTH_REPOSITORY = "HealthRepository";
