import { User } from '@prisma/client';

export namespace IFindUserByEmailDTO {
  export type Params = {
    email: string;
  };

  export type Result = {
    isExists: boolean;
    data: User | null;
  };
}

export namespace IFindUserByIdDTO {
  export type Params = {
    id: string;
  };

  export type Result = {
    isExists: boolean;
    data: User | null;
  };
}

export namespace ICreateUserDTO {
  export type Params = {
    id: string;
    name: string;
    email: string;
    password: string;
  };
}

export interface IRepositoryUsers {
  FindUserByEmail(
    data: IFindUserByEmailDTO.Params
  ): Promise<IFindUserByEmailDTO.Result>;

  FindUserById(data: IFindUserByIdDTO.Params): Promise<IFindUserByIdDTO.Result>;

  Create(data: ICreateUserDTO.Params): Promise<void>;

  // FindExistsUserByEmailEqual(
  //   data: IFindExistsUserByEmailEqualDTO.Params
  // ): Promise<IFindExistsUserByEmailEqualDTO.Result>;

  // DeleteByIdTenant(data: IDeleteByIdTenantDTO.Params): Promise<void>;

  // Get(data: IGetUsersDTO.Params): Promise<IGetUsersDTO.Result>;

  // Update(data: IUpdateUserDTO.Params): Promise<void>;
}
