import "reflect-metadata";

import "dotenv/config";
import { env } from "@infrastructure/config/env";
import { createApp } from "./app";

const app = createApp();

const PORT = env.SERVER_PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 API Express rodando em http://localhost:${PORT}`);
});
