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
import { checkRole } from '../middlewares/checkRole';
import Role from '../../../domain/models/role.model';

const router: Router = express.Router();

router.get(
    '/users',
    [checkJwt, checkRole([Role.User, Role.Client])],
    getAllUsersController,
);
router.get(
    '/users/:id',
    [checkJwt, checkRole([Role.User, Role.Client])],
    getUserByIdController,
);
router.post('/users/register', RegisterUserValidators, RegisterUserController);
router.post('/users/login', LoginUserValidators, LoginUserController);
router.put(
    '/users/:id',
    [checkJwt, checkRole([Role.User])],
    UpdateUserValidators,
    UpdateUserController,
);
router.delete(
    '/users/:id',
    [checkJwt, checkRole([Role.User])],
    deleteUserController,
);

export default router;
