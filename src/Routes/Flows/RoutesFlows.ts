import { Router } from 'express';

import { CreateFlowsControllerIndex } from 'UseCases/Flows/Create';

export const RoutesFlows = Router();

RoutesFlows.post(
  '/create',
  (req, res) => CreateFlowsControllerIndex.handle(req, res),
);
