// export namespace IFindUserByIdDTO {
//   export type Params = {
//     id: string;
//   };

//   export type Result = {
//     isExists: boolean;
//     data: User | null;
//   };
// }

export namespace ICreateFlowsDTO {
  export type Params = {
    id: string;
    data: string;
  };
}

export interface IRepositoryFlows {
  Create(data: ICreateFlowsDTO.Params): Promise<void>;

  // FindUserById(data: IFindUserByIdDTO.Params): Promise<IFindUserByIdDTO.Result>;

  // FindExistsUserByEmailEqual(
  //   data: IFindExistsUserByEmailEqualDTO.Params
  // ): Promise<IFindExistsUserByEmailEqualDTO.Result>;

  // DeleteByIdTenant(data: IDeleteByIdTenantDTO.Params): Promise<void>;

  // Get(data: IGetUsersDTO.Params): Promise<IGetUsersDTO.Result>;

  // Update(data: IUpdateUserDTO.Params): Promise<void>;
}
