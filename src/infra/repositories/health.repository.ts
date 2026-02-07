import { IHealthRepository } from "@domain/repositories/ihealth.repository";
import { injectable } from "tsyringe";

@injectable()
export class HealthRepository implements IHealthRepository {
  check(): { status: string; timestamp: string } {
    return {
      status: "ok",
      timestamp: new Date().toISOString(),
    };
  }
}
