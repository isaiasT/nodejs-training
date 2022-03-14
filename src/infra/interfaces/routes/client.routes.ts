import express, { Router } from 'express';
import getAllClientsController from '../controllers/client/getAllClients.controller';
import getClientByIdController from '../controllers/client/getClientById.controller';
import {
    RegisterClientController,
    RegisterClientValidators,
} from '../controllers/client/registerClient.controller';
import {
    UpdateClientController,
    UpdateClientValidators,
} from '../controllers/client/updateClient.controller';
import deleteClientController from '../controllers/client/deleteClient.controller';
import {
    LoginClientController,
    LoginClientValidators,
} from '../controllers/client/loginClient.controller';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';
import Role from '../../../domain/models/role.model';

const router: Router = express.Router();

router.get(
    '/clients',
    [checkJwt, checkRole([Role.User, Role.Client])],
    getAllClientsController,
);
router.get(
    '/clients/:id',
    [checkJwt, checkRole([Role.User, Role.Client])],
    getClientByIdController,
);
router.post(
    '/clients/register',
    RegisterClientValidators,
    RegisterClientController,
);
router.post('/clients/login', LoginClientValidators, LoginClientController);
router.put('/clients/:id', UpdateClientValidators, UpdateClientController);
router.delete(
    '/clients/:id',
    [checkJwt, checkRole([Role.Client])],
    deleteClientController,
);

export default router;
