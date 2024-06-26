import { IRepositoryUsers } from 'Repositories/User/IRepositoryUser';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/Util/AppError/AppError';
import { generateToken } from '@shared/Util/configToken/generateToken';

import { ISessionUserDTO } from './DTO/ISessionDTO';

@injectable()
export class SessionUseCase {
  constructor(@inject('RepositoryUsers') private IRepositoryUsers: IRepositoryUsers) {}

  async execute({ idUser }: ISessionUserDTO) {
    const {
      data: resDataUser, isExists,
    } = await this.IRepositoryUsers.FindUserById({ id: idUser });

    if (!isExists || !resDataUser) throw new AppError('Email/Senha incorreto', 401);

    const token = generateToken({
      email: resDataUser?.email,
      id: resDataUser?.email,
    });

    const { password: passNotUser, ...restDataUser } = resDataUser;

    return {
      ...restDataUser,
      token,
    };
  }
}
