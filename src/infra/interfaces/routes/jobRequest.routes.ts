import express, { Router } from 'express';
import getAllJobRequestsController from '../controllers/jobRequest/getAllJobRequests.controller';
import getJobRequestByIdController from '../controllers/jobRequest/getJobRequestById.controller';
import {
    CreateJobRequestController,
    CreateJobRequestValidators,
} from '../controllers/jobRequest/createJobRequest.controller';
import updateJobRequestController from '../controllers/jobRequest/updateJobRequest.controller';
import deleteJobRequestController from '../controllers/jobRequest/deleteJobRequest.controller';
import { checkJwt } from '../middlewares/checkJwt';
import { checkRole } from '../middlewares/checkRole';
import Role from '../../../domain/models/role.model';

const router: Router = express.Router();

router.get(
    '/jobrequests',
    [checkJwt, checkRole([Role.User, Role.Client])],
    getAllJobRequestsController,
);
router.get(
    '/jobrequests/:id',
    [checkJwt, checkRole([Role.User, Role.Client])],
    getJobRequestByIdController,
);
router.post(
    '/jobrequests',
    [checkJwt, checkRole([Role.Client])],
    CreateJobRequestValidators,
    CreateJobRequestController,
);
router.put(
    '/jobrequests/:id',
    [checkJwt, checkRole([Role.Client])],
    updateJobRequestController,
);
router.delete(
    '/jobrequests/:id',
    [checkJwt, checkRole([Role.Client])],
    deleteJobRequestController,
);

export default router;
