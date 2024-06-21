import { Router } from 'express';

import { CreateAccountControllerIndex } from 'UseCases/Account/Create';

export const RoutesAccount = Router();

RoutesAccount.post(
  '/account',
  (req, res) => CreateAccountControllerIndex.handle(req, res),
);
