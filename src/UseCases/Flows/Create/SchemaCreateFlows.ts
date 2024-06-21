import { z } from 'zod';

export const SchemaCreateFlows = z.object({
  data: z.any({}),
});
