import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export function validateBody<T extends z.ZodTypeAny>(schema: T) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(422).json({
        message: "Validation error",
        errors: z.formatError(result.error),
      });
    }

    req.body = result.data;
    next();
  };
}
