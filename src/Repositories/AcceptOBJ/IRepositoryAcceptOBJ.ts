import { AcceptOBJ } from '@prisma/client';

export namespace IFindAcceptOBJByTypeDTO {
  export type Params = {
    type: string;
  };

  export type Result = {
    isExists: boolean;
    data: AcceptOBJ | null;
  };
}

export namespace IFindAcceptOBJByIdDTO {
  export type Params = {
    id: string;
  };

  export type Result = {
    isExists: boolean;
    data: AcceptOBJ | null;
  };
}

export namespace ICreateAcceptObjDTO {
  export type Params = {
    type: string;
    data: string;
    id: string;
  };
}

export namespace IGetAcceptObjDTO {
  export type Result = {
    data: AcceptOBJ[];
    isExists: boolean;
    count: number;
  };
}

export interface IRepositoryAcceptOBJ {
  FindAcceptOBJByType(
    data: IFindAcceptOBJByTypeDTO.Params
  ): Promise<IFindAcceptOBJByTypeDTO.Result>;

  FindAcceptOBJById(
    data: IFindAcceptOBJByIdDTO.Params
  ): Promise<IFindAcceptOBJByIdDTO.Result>;

  Create(data: ICreateAcceptObjDTO.Params): Promise<void>;

  Get(): Promise<IGetAcceptObjDTO.Result>;

  // DeleteByIdTenant(data: IDeleteByIdTenantDTO.Params): Promise<void>;
}
