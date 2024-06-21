import { z } from 'zod';

import { SchemaCreateFlows } from '../SchemaCreateFlows';

export type SchemaCreateFlowsZod = z.output<typeof SchemaCreateFlows>;

export namespace ICreateFlowsUseCaseDTO {
  export type Params = SchemaCreateFlowsZod;

  export type Result = {
    message: string;
    id: string
  };
}
