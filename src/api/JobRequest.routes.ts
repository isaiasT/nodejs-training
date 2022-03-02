import express, { Router } from 'express';
import getAllJobRequestsController from '../controllers/JobRequest/getAllJobRequests';
import getJobRequestByIdController from '../controllers/JobRequest/getJobRequestById';
import createJobRequestController from '../controllers/JobRequest/createJobRequest';
import updateJobRequestController from '../controllers/JobRequest/updateJobRequest';
import deleteJobRequestController from '../controllers/JobRequest/deleteJobRequest';

const router: Router = express.Router();

router.get('/jobrequests', getAllJobRequestsController);
router.get('/jobrequests/:id', getJobRequestByIdController);
router.post('/jobrequests', createJobRequestController);
router.put('/jobrequests/:id', updateJobRequestController);
router.delete('/jobrequests/:id', deleteJobRequestController);

export default router;
