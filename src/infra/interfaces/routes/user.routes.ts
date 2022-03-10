import express, { Router } from 'express';
import getAllUsersController from '../controllers/user/getAllUsers.controller';
import getUserByIdController from '../controllers/user/getUserById.controller';
import {
    RegisterUserValidators,
    RegisterUserController,
} from '../controllers/user/registerUser.controller';
import {
    LoginUserValidators,
    LoginUserController,
} from '../controllers/user/loginUser.controller';
import {
    UpdateUserController,
    UpdateUserValidators,
} from '../controllers/user/updateUser.controller';
import deleteUserController from '../controllers/user/deleteUser.controller';
import { checkJwt } from '../middlewares/checkJwt';

const router: Router = express.Router();

router.get('/users', [checkJwt], getAllUsersController);
router.get('/users/:id', getUserByIdController);
router.post('/users/register', RegisterUserValidators, RegisterUserController);
router.post('/users/login', LoginUserValidators, LoginUserController);
router.put('/users/:id', UpdateUserValidators, UpdateUserController);
router.delete('/users/:id', deleteUserController);

export default router;
