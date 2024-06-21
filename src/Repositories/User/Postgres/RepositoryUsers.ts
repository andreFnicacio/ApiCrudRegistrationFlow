import { prisma } from '@config/DataBase/Prisma/Index';

import {
  ICreateUserDTO,
  IRepositoryUsers,
  IFindUserByIdDTO,
  IFindUserByEmailDTO,
} from '../IRepositoryUser';

export class RepositoryUsers implements IRepositoryUsers {
  async FindUserById({ id }: IFindUserByIdDTO.Params) {
    const dataUser = await prisma.user.findUnique({ where: { id } });

    return {
      isExists: !!dataUser,
      data: dataUser,
    };
  }

  async FindUserByEmail({ email }: IFindUserByEmailDTO.Params) {
    const dataUser = await prisma.user.findUnique({ where: { email } });

    return {
      isExists: !!dataUser,
      data: dataUser,
    };
  }

  async Create({
    email, id, name, password,
  }: ICreateUserDTO.Params) {
    await prisma.user.create({
      data: {
        email,
        name,
        password,
        id,
      },
    });
  }
}
