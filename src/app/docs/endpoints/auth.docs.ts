import { EndpointDoc } from "../contracts/endpoint-doc";

export const authDocs: EndpointDoc[] = [
  {
    path: "/auth/login",
    method: "post",
    tag: "Auth",
    summary: "Login na API",
    description: "Realiza login na API",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            required: ["email", "password"],
            properties: {
              email: {
                type: "string",
                format: "email",
                example: "user@email.com",
              },
              password: {
                type: "string",
                format: "password",
                example: "123456",
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: "Login realizado com sucesso",
      },
      401: {
        description: "Credenciais inválidas",
      },
    },
  },
];
