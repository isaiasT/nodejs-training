import express, { Router } from 'express';
import getAllPlacementsController from '../controllers/Placement/getAllPlacements';
import getPlacementByIdController from '../controllers/Placement/getPlacementById';
import createPlacementController from '../controllers/Placement/createPlacement';
import updatePlacementController from '../controllers/Placement/updatePlacement';
import deletePlacementController from '../controllers/Placement/deletePlacement';

const router: Router = express.Router();

router.get('/placements', getAllPlacementsController);
router.get('/placements/:id', getPlacementByIdController);
router.post('/placements', createPlacementController);
router.put('/placements/:id', updatePlacementController);
router.delete('/placements/:id', deletePlacementController);

export default router;
