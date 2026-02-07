import { Request, Response, NextFunction } from "express";
import { container } from "tsyringe";
import { AuthService } from "@appplication/services/auth.service";

export async function autMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token missing" });
  }

  const [, token] = authHeader.split(" ");

  const authService = container.resolve(AuthService);

  authService
    .verifyToken(token)
    .then((payload) => {
      req.user = payload;
      next();
    })
    .catch(() => {
      return res.status(401).json({ message: "Invalid token" });
    });
}
