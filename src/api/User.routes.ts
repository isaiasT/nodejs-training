import express, { Router } from 'express';
import getAllUsersController from '../controllers/User/getAllUsers';
import getUserByIdController from '../controllers/User/getUserById';
import {
    CreateUserValidators,
    CreateUserController,
} from '../controllers/User/createUser';
import updateUserController from '../controllers/User/updateUser';
import deleteUserController from '../controllers/User/deleteUser';

const router: Router = express.Router();

router.get('/users', getAllUsersController);
router.get('/users/:id', getUserByIdController);
router.post('/users', CreateUserValidators, CreateUserController);
router.put('/users/:id', updateUserController);
router.delete('/users/:id', deleteUserController);

export default router;
