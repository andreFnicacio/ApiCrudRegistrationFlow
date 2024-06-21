import { Router } from 'express';

import { GetComponentsAcceptControllerIndex } from 'UseCases/ComponentsAccept/Get';

export const RoutesComponentAccept = Router();

RoutesComponentAccept.get(
  '/acceptComponents',
  (req, res) => GetComponentsAcceptControllerIndex.handle(req, res),
);
