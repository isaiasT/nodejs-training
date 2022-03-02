import express, { Router } from 'express';
import getAllClientsController from '../controllers/Client/getAllClients';
import getClientByIdController from '../controllers/Client/getClientById';
import createClientController from '../controllers/Client/createClient';
import updateClientController from '../controllers/Client/updateClient';
import deleteClientController from '../controllers/Client/deleteClient';

const router: Router = express.Router();

router.get('/clients', getAllClientsController);
router.get('/clients/:id', getClientByIdController);
router.post('/clients', createClientController);
router.put('/clients/:id', updateClientController);
router.delete('/clients/:id', deleteClientController);

export default router;
