import { generatePaths } from './docs/generate-openapi';

export const openapiSpecification = {
  openapi: '3.0.0',
  info: {
    title: 'TypeScript Initial Project API',
    version: '1.0.0',
    description: 'Documentação da API do TypeScript Initial Project',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Servidor Local',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  paths: generatePaths(),
};
