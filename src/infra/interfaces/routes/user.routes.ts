import express, { Router } from 'express';
import getAllUsersController from '../controllers/user/getAllUsers.controller';
import getUserByIdController from '../controllers/user/getUserById.controller';
import {
    CreateUserValidators,
    CreateUserController,
} from '../controllers/user/createUser.controller';
import {
    UpdateUserController,
    UpdateUserValidators,
} from '../controllers/user/updateUser.controller';
import deleteUserController from '../controllers/user/deleteUser.controller';

const router: Router = express.Router();

router.get('/users', getAllUsersController);
router.get('/users/:id', getUserByIdController);
router.post('/users', CreateUserValidators, CreateUserController);
router.put('/users/:id', UpdateUserValidators, UpdateUserController);
router.delete('/users/:id', deleteUserController);

export default router;
