import { container } from 'tsyringe';

import { CreateAccountController } from './CreateAccount.controller';
import { CreateAccountUseCase } from './CreateAccount.UseCase';

export const CreateAccountControllerIndex = new CreateAccountController(
  container.resolve(CreateAccountUseCase),
);
