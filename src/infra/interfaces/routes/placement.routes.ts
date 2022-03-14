import express, { Router } from 'express';
import getAllPlacementsController from '../controllers/placement/getAllPlacements.controller';
import getPlacementByIdController from '../controllers/placement/getPlacementById.controller';
import {
    CreatePlacementController,
    CreatePlacementValidators,
} from '../controllers/placement/createPlacement.controller';
import updatePlacementController from '../controllers/placement/updatePlacement.controller';
import deletePlacementController from '../controllers/placement/deletePlacement.controller';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';
import Role from '../../../domain/models/role.model';

const router: Router = express.Router();

router.get(
    '/placements',
    [checkJwt, checkRole([Role.User, Role.Client])],
    getAllPlacementsController,
);
router.get(
    '/placements/:id',
    [checkJwt, checkRole([Role.User, Role.Client])],
    getPlacementByIdController,
);
router.post(
    '/placements',
    [checkJwt, checkRole([Role.Client])],
    CreatePlacementValidators,
    CreatePlacementController,
);
router.put(
    '/placements/:id',
    [checkJwt, checkRole([Role.Client])],
    updatePlacementController,
);
router.delete(
    '/placements/:id',
    [checkJwt, checkRole([Role.Client])],
    deletePlacementController,
);

export default router;
