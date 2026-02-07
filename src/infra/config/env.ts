import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),

  SERVER_PORT: z
    .string()
    .default("3000")
    .transform(Number)
    .refine((v) => !Number.isNaN(v), {
      message: "PORT must be a number",
    }),
  JWT_SECRET: z.string().default("secret"),

  // Exemplo de boolean
  ENABLE_SWAGGER: z
    .string()
    .default("false")
    .transform((v) => v === "true"),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error("❌ Invalid environment variables");
  console.error(_env.error.format());
  process.exit(1);
}

export const env = _env.data;
