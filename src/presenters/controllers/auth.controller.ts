import { injectable } from "tsyringe";
import { Request, Response } from "express";
import { AuthService } from "@appplication/services/auth.service";
import { Public } from "@infrastructure/decorators/route-access.decorator";

@injectable()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  async login(req: Request, res: Response) {
    const { email } = req.body;

    const token = await this.authService.generateToken({ email });

    return res.json({ token });
  }
}
