import { Router } from 'express';

import { verifyToken } from '@shared/middlewares/verifyToken';

import { RoutesAccount } from './Account/RoutesAccount';
import { routerAuthentication } from './Authentication/RouterAuthentication';
import { RoutesComponentAccept } from './ComponentAccept/RoutesComponentAccept';
import { RoutesFlows } from './Flows/RoutesFlows';

const routerIndex = Router();

const routerTeste = Router();
routerTeste.get('/', (req, res) => res.send('Hello World!'));

routerIndex.use(routerTeste);

routerIndex.use(RoutesAccount);
routerIndex.use(routerAuthentication);

routerIndex.use(verifyToken);

routerIndex.use(RoutesComponentAccept);

routerIndex.use('/flows', RoutesFlows);

export { routerIndex };
