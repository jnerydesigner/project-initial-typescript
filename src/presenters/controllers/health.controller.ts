import { HealthService } from "@appplication/services/health.service";
import { Request, Response } from "express";
import { injectable } from "tsyringe";

@injectable()
export class HealthController {
  constructor(private readonly healthService: HealthService) {}
  async handler(req: Request, res: Response) {
    const result = await this.healthService.check();
    res.json(result);
  }
}
