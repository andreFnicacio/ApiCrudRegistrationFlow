import { container } from 'tsyringe';

import { GetComponentsAcceptController } from './GetComponentsAccept.controller';
import { GetComponentsAcceptUseCase } from './GetComponentsAccept.UseCase';

export const GetComponentsAcceptControllerIndex = new GetComponentsAcceptController(
  container.resolve(GetComponentsAcceptUseCase),
);
