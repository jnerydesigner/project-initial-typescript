import { Request } from "express";
import { container } from "tsyringe";
import { AuthService } from "@appplication/services/auth.service";
import { AuthPayload } from "@domain/interfaces/auth-payload.interface";

export async function validateToken(req: Request): Promise<AuthPayload> {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");

  const authService = container.resolve(AuthService);

  const payload = await authService.verifyToken(token);

  return payload;
}
