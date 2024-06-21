import { Router } from 'express';

import { LoginControllerIndex } from 'UseCases/Authentication/Login';
import { SessionControllerIndex } from 'UseCases/Authentication/Sessions';

import { verifyToken } from '../../shared/middlewares/verifyToken';

export const routerAuthentication = Router();

routerAuthentication.post(
  '/login',
  (req, res) => LoginControllerIndex.handle(req, res),
);

routerAuthentication.post(
  '/sessions',
  verifyToken,
  (req, res) => SessionControllerIndex.handle(req, res),
);
