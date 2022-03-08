import { UpdateJobRequest } from '../../../../application/job-request';
import { Response, Request } from 'express';

const UpdateJobRequestController = async (req: Request, res: Response) => {
    const results = await UpdateJobRequest({
        id: req.params.id,
        jobFunction: req.body.jobFunction,
    });
    res.json(results);
};

export default UpdateJobRequestController;
