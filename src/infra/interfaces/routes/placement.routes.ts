import express, { Router } from 'express';
import getAllPlacementsController from '../controllers/placement/getAllPlacements.controller';
import getPlacementByIdController from '../controllers/placement/getPlacementById.controller';
import {
    CreatePlacementController,
    CreatePlacementValidators,
} from '../controllers/placement/createPlacement.controller';
import updatePlacementController from '../controllers/placement/updatePlacement.controller';
import deletePlacementController from '../controllers/placement/deletePlacement.controller';

const router: Router = express.Router();

router.get('/placements', getAllPlacementsController);
router.get('/placements/:id', getPlacementByIdController);
router.post(
    '/placements',
    CreatePlacementValidators,
    CreatePlacementController,
);
router.put('/placements/:id', updatePlacementController);
router.delete('/placements/:id', deletePlacementController);

export default router;
