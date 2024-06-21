import { RepositoryAcceptOBJ } from 'Repositories/AcceptOBJ/Postgres/RepositoryAcceptOBJ';

import { handleGenerateUuid } from '@shared/features/handleGenerateUuid/handleGenerateUuid';
import { dataTypesOBJ } from '@shared/Jobs/HandleGetDataObjAcceptBot/dataTypesOBJ';

export class GetDataObjAcceptBot {
  async execute() {
    const repositoryAcceptOBJ = new RepositoryAcceptOBJ();

    for (let index = 0; index < dataTypesOBJ.length; index += 1) {
      const element = dataTypesOBJ[index];

      const { isExists } = await repositoryAcceptOBJ.FindAcceptOBJByType({ type: element.type });

      if (!isExists) {
        repositoryAcceptOBJ.Create({
          data: JSON.stringify(element),
          id: handleGenerateUuid(),
          type: element.type,
        });
      }
    }
  }
}
