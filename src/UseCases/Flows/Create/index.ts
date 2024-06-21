import { container } from 'tsyringe';

import { CreateFlowsController } from './CreateFlows.controller';
import { CreateFlowsUseCase } from './CreateFlows.UseCase';

export const CreateFlowsControllerIndex = new CreateFlowsController(
  container.resolve(CreateFlowsUseCase),
);
