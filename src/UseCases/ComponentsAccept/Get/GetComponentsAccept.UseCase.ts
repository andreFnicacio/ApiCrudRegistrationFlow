import { IRepositoryAcceptOBJ } from 'Repositories/AcceptOBJ/IRepositoryAcceptOBJ';
import { inject, injectable } from 'tsyringe';

import { IGetComponentsAcceptUseCaseDTO } from './DTO/IGetComponentsAcceptDTO';

@injectable()
export class GetComponentsAcceptUseCase {
  constructor(@inject('RepositoryAcceptOBJ') private repositoryAcceptOBJ: IRepositoryAcceptOBJ) {}

  async execute() :Promise<IGetComponentsAcceptUseCaseDTO.Result> {
    const { data, count } = await this.repositoryAcceptOBJ.Get();

    const returnResponse = {
      data: data.map((item) => JSON.parse(String(item.data))),
      meta: {
        count,
      },
    };

    return returnResponse;
  }
}
