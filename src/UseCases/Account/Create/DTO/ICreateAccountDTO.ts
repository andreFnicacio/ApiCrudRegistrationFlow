import { z } from 'zod';

import { SchemaCreateAccount } from '../SchemaCreateAccount';

export type SchemaCreateAccountZod = z.output<typeof SchemaCreateAccount>;

export namespace ICreateAccountUseCaseDTO {
  export type Params = SchemaCreateAccountZod;

  export type Result = {
    message: string;
  };
}
