import { GetJobRequestById } from '../../../../application/job-request';
import { Response, Request } from 'express';

const GetJobRequestByIdController = async (req: Request, res: Response) => {
    const jobRequest = await GetJobRequestById({ id: req.params.id });
    res.json(jobRequest);
};

export default GetJobRequestByIdController;
