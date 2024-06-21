import { prisma } from '@config/DataBase/Prisma/Index';

import { ICreateFlowsDTO, IRepositoryFlows } from '../IRepositoryFlows';

export class RepositoryFlows implements IRepositoryFlows {
  // async FindUserById({ id }: IFindUserByIdDTO.Params) {
  //   const dataUser = await prisma.user.findUnique({ where: { id } });

  //   return {
  //     isExists: !!dataUser,
  //     data: dataUser,
  //   };
  // }

  async Create({ data, id }: ICreateFlowsDTO.Params) {
    await prisma.flows.create({
      data: {
        data,
        id,
      },
    });
  }
}
