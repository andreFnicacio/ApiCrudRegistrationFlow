import { AcceptOBJ } from '@prisma/client';

export namespace IGetComponentsAcceptUseCaseDTO {
  export type Params = {}

  export type Result = {
    data: AcceptOBJ[];
  };
}
