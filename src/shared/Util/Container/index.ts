import { RepositoryAcceptOBJ } from 'Repositories/AcceptOBJ/Postgres/RepositoryAcceptOBJ';
import { IRepositoryFlows } from 'Repositories/Flows/IRepositoryFlows';
import { RepositoryFlows } from 'Repositories/Flows/Postgres/RepositoryFlows';
import { RepositoryUsers } from 'Repositories/User/Postgres/RepositoryUsers';
import { container } from 'tsyringe';

container.registerSingleton<IRepositoryFlows>(
  'RepositoryFlows',
  RepositoryFlows,
);

container.registerSingleton<RepositoryAcceptOBJ>(
  'RepositoryAcceptOBJ',
  RepositoryAcceptOBJ,
);

container.registerSingleton<RepositoryUsers>(
  'RepositoryUsers',
  RepositoryUsers,
);
