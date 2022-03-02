import express, { Router } from 'express';
import getAllCandidaciesController from '../controllers/Candidacy/getAllCandidacies';
import getCandidacyByIdController from '../controllers/Candidacy/getCandidacyById';
import createCandidacyController from '../controllers/Candidacy/createCandidacy';
import updateCandidacyController from '../controllers/Candidacy/updateCandidacy';
import deleteCandidacyController from '../controllers/Candidacy/deleteCandidacy';

const router: Router = express.Router();

router.get('/candidacies', getAllCandidaciesController);
router.get('/candidacies/:id', getCandidacyByIdController);
router.post('/candidacies', createCandidacyController);
router.put('/candidacies/:id', updateCandidacyController);
router.delete('/candidacies/:id', deleteCandidacyController);

export default router;
