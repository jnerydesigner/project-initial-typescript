/* eslint-disable @typescript-eslint/no-explicit-any */
import { healthDocs } from './endpoints/health.docs';

export function generatePaths() {
  const paths: any = {};

  for (const doc of healthDocs) {
    paths[doc.path] ??= {};
    paths[doc.path][doc.method] = {
      tags: [doc.tag],
      summary: doc.summary,
      description: doc.description,
      responses: {
        200: { description: 'Sucesso' },
      },
    };
  }

  return paths;
}
