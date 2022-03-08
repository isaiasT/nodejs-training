import express, { Router } from 'express';
import getAllClientsController from '../controllers/client/getAllClients.controller';
import getClientByIdController from '../controllers/client/getClientById.controller';
import createClientController from '../controllers/client/createClient.controller';
import updateClientController from '../controllers/client/updateClient.controller';
import deleteClientController from '../controllers/client/deleteClient.controller';

const router: Router = express.Router();

router.get('/clients', getAllClientsController);
router.get('/clients/:id', getClientByIdController);
router.post('/clients', createClientController);
router.put('/clients/:id', updateClientController);
router.delete('/clients/:id', deleteClientController);

export default router;
