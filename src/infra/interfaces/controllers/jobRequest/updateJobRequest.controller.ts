import { UpdateJobRequest } from '../../../../application/job-request';
import { Response, Request } from 'express';

const UpdateJobRequestController = async (req: Request, res: Response) => {
    const results = await UpdateJobRequest({
        id: req.params.id,
        jobFunction: req.body.jobFunction,
    });

    if (results.error) {
        res.status(400).json(results);
    } else {
        res.json(results.jobRequest);
    }
};

export default UpdateJobRequestController;
