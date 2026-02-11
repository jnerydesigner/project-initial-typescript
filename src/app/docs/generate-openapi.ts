/* eslint-disable @typescript-eslint/no-explicit-any */
import { healthDocs } from "./endpoints/health.docs";
import { authDocs } from "./endpoints/auth.docs";

export function generatePaths() {
  const paths: any = {};

  for (const doc of [...healthDocs, ...authDocs]) {
    paths[doc.path] ??= {};
    paths[doc.path][doc.method] = {
      tags: [doc.tag],
      summary: doc.summary,
      description: doc.description,
      ...(doc.requestBody && { requestBody: doc.requestBody }),
      responses: {
        200: { description: "Sucesso" },
      },
    };
  }

  return paths;
}
