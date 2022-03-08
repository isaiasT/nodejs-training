import express, { Router } from 'express';
import getAllJobRequestsController from '../controllers/jobRequest/getAllJobRequests.controller';
import getJobRequestByIdController from '../controllers/jobRequest/getJobRequestById.controller';
import createJobRequestController from '../controllers/jobRequest/createJobRequest.controller';
import updateJobRequestController from '../controllers/jobRequest/updateJobRequest.controller';
import deleteJobRequestController from '../controllers/jobRequest/deleteJobRequest.controller';

const router: Router = express.Router();

router.get('/jobrequests', getAllJobRequestsController);
router.get('/jobrequests/:id', getJobRequestByIdController);
router.post('/jobrequests', createJobRequestController);
router.put('/jobrequests/:id', updateJobRequestController);
router.delete('/jobrequests/:id', deleteJobRequestController);

export default router;
