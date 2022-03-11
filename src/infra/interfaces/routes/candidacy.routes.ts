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

router.get('/candidacies', getAllCandidaciesController);
router.get('/candidacies/:id', getCandidacyByIdController);
router.post(
    '/candidacies',
    [checkJwt, checkRole([Role.User])],
    CreateCandidacyValidators,
    CreateCandidacyController,
);
router.put('/candidacies/:id', updateCandidacyController);
router.delete('/candidacies/:id', deleteCandidacyController);

export default router;
