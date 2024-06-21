import { IRepositoryFlows } from 'Repositories/Flows/IRepositoryFlows';
import { inject, injectable } from 'tsyringe';

import { handleGenerateUuid } from '@shared/features/handleGenerateUuid/handleGenerateUuid';
import { ZODVerifyParse } from '@shared/Util/ZOD/zod';

import { ICreateFlowsUseCaseDTO } from './DTO/ICreateFlowsDTO';
import { SchemaCreateFlows } from './SchemaCreateFlows';

@injectable()
export class CreateFlowsUseCase {
  constructor(@inject('RepositoryFlows') private repositoryFlows: IRepositoryFlows) {}

  async execute(request: ICreateFlowsUseCaseDTO.Params)
      :Promise<ICreateFlowsUseCaseDTO.Result> {
    const data = ZODVerifyParse({
      schema: SchemaCreateFlows, data: request,
    });

    const dataCreateFlowToJson = JSON.stringify(data.data);
    const idCreateFlow = handleGenerateUuid();

    await this.repositoryFlows.Create({
      id: idCreateFlow,
      data: dataCreateFlowToJson,
    });

    const returnResponse = {
      message: 'Flow criado com sucesso !',
      id: idCreateFlow,
    };

    return returnResponse;
  }
}
