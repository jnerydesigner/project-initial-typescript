import jwt from "jsonwebtoken";

import { AuthPayload } from "@domain/interfaces/auth-payload.interface";
import { injectable } from "tsyringe";
import { env } from "@infrastructure/config/env";

@injectable()
export class AuthService {
  async verifyToken(token: string): Promise<AuthPayload> {
    try {
      const payload = jwt.verify(token, env.JWT_SECRET) as AuthPayload;

      return payload;
    } catch {
      throw new Error("Invalid token");
    }
  }

  async generateToken(payload: AuthPayload): Promise<string> {
    return jwt.sign(payload, env.JWT_SECRET);
  }
}
