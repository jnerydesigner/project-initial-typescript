import { createApp } from "./app";

const app = createApp();

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`🚀 API Express rodando em http://localhost:${PORT}`);
});
