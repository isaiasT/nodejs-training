import { GetJobRequestById } from '../../core/useCases';
import { Response, Request } from 'express';

const GetAllJobRequestsController = async (req: Request, res: Response) => {
    const jobRequest = await GetJobRequestById({ id: req.params.id });
    res.json(jobRequest);
};

export default GetAllJobRequestsController;
