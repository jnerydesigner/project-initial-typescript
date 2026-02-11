export type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

export interface EndpointDoc {
  path: string;
  method: HttpMethod;
  tag: string;
  summary: string;
  description?: string;
  responses?: Record<
    number,
    {
      description: string;
      content?: {
        [contentType: string]: {
          schema: Record<string, unknown>;
        };
      };
    }
  >;

  requestBody?: {
    required?: boolean;
    content: {
      [contentType: string]: {
        schema: Record<string, unknown>;
      };
    };
  };
}
