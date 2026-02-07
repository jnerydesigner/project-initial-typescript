import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
  },
  resolve: {
    alias: {
      "@infra": path.resolve(__dirname, "src/infra"),
      "@app": path.resolve(__dirname, "src/app"),
      "@presenters": path.resolve(__dirname, "src/presenters"),
      "@domain": path.resolve(__dirname, "src/domain"),
    },
  },
});
