import { AuthPayload } from "../../domain/interfaces/auth-payload.interface";

declare global {
  namespace Express {
    interface Request {
      user?: AuthPayload;
    }
  }
}
