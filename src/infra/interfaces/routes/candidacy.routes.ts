import express, { Router } from 'express';
import getAllCandidaciesController from '../controllers/candidacy/getAllCandidacies.controller';
import getCandidacyByIdController from '../controllers/candidacy/getCandidacyById.controller';
import createCandidacyController from '../controllers/candidacy/createCandidacy.controller';
import updateCandidacyController from '../controllers/candidacy/updateCandidacy.controller';
import deleteCandidacyController from '../controllers/candidacy/deleteCandidacy.controller';

const router: Router = express.Router();

router.get('/candidacies', getAllCandidaciesController);
router.get('/candidacies/:id', getCandidacyByIdController);
router.post('/candidacies', createCandidacyController);
router.put('/candidacies/:id', updateCandidacyController);
router.delete('/candidacies/:id', deleteCandidacyController);

export default router;
