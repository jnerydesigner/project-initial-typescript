import { EndpointDoc } from "../contracts/endpoint-doc"

export const healthDocs: EndpointDoc[] = [
  {
    path: "/health",
    method: "get",
    tag: "Health",
    summary: "Health check da API",
    description: "Retorna o status da aplicação",
    responses: {
      200: {
        description: "Sucesso",
      },
    },
  },
]
