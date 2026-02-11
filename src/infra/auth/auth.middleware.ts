/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from "express";
import { IS_PUBLIC_KEY } from "@infrastructure/decorators/route-access.decorator";
import { validateToken } from "./validate-token";

function createAuthMiddleware(target?: any, propertyKey?: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (target && propertyKey) {
        const isPublic = Reflect.getMetadata(IS_PUBLIC_KEY, target, propertyKey);

        if (isPublic) {
          return next();
        }
      }

      const payload = await validateToken(req);

      req.user = payload;

      next();
    } catch (error: any) {
      return res.status(401).json({ message: error.message || "Invalid token" });
    }
  };
}

export const authMiddleware = createAuthMiddleware;

export function authMiddlewareGateway(target: any, propertyKey: string) {
  return createAuthMiddleware(target, propertyKey);
}
