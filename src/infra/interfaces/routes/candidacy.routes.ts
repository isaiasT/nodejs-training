import express, { Router } from 'express';
import getAllCandidaciesController from '../controllers/candidacy/getAllCandidacies.controller';
import getCandidacyByIdController from '../controllers/candidacy/getCandidacyById.controller';
import {
    CreateCandidacyController,
    CreateCandidacyValidators,
} from '../controllers/candidacy/createCandidacy.controller';
import updateCandidacyController from '../controllers/candidacy/updateCandidacy.controller';
import deleteCandidacyController from '../controllers/candidacy/deleteCandidacy.controller';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';
import Role from '../../../domain/models/role.model';

const router: Router = express.Router();

router.get(
    '/candidacies',
    [checkJwt, checkRole([Role.User, Role.Client])],
    getAllCandidaciesController,
);
router.get(
    '/candidacies/:id',
    [checkJwt, checkRole([Role.User, Role.Client])],
    getCandidacyByIdController,
);
router.post(
    '/candidacies',
    [checkJwt, checkRole([Role.User])],
    CreateCandidacyValidators,
    CreateCandidacyController,
);
router.put(
    '/candidacies/:id',
    [checkJwt, checkRole([Role.User])],
    updateCandidacyController,
);
router.delete(
    '/candidacies/:id',
    [checkJwt, checkRole([Role.User])],
    deleteCandidacyController,
);

export default router;
