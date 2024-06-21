import { prisma } from '@config/DataBase/Prisma/Index';

import {
  ICreateAcceptObjDTO,
  IFindAcceptOBJByIdDTO,
  IFindAcceptOBJByTypeDTO,
  IGetAcceptObjDTO,
  IRepositoryAcceptOBJ,
} from '../IRepositoryAcceptOBJ';

export class RepositoryAcceptOBJ implements IRepositoryAcceptOBJ {
  async Get(): Promise<IGetAcceptObjDTO.Result> {
    const dataAcceptOBJ = await prisma.acceptOBJ.findMany();
    const userCount = await prisma.acceptOBJ.count();

    return {
      isExists: !!dataAcceptOBJ.length,
      data: dataAcceptOBJ,
      count: userCount,
    };
  }

  async FindAcceptOBJById({ id }: IFindAcceptOBJByIdDTO.Params) {
    const dataAcceptOBJ = await prisma.acceptOBJ.findUnique({ where: { id } });

    return {
      isExists: !!dataAcceptOBJ,
      data: dataAcceptOBJ,
    };
  }

  async FindAcceptOBJByType({ type }: IFindAcceptOBJByTypeDTO.Params) {
    const dataAcceptOBJ = await prisma.acceptOBJ.findUnique({ where: { type } });

    return {
      isExists: !!dataAcceptOBJ,
      data: dataAcceptOBJ,
    };
  }

  async Create({ data, id, type }: ICreateAcceptObjDTO.Params) {
    await prisma.acceptOBJ.create({
      data: {
        data,
        type,
        id,
      },
    });
  }
}
