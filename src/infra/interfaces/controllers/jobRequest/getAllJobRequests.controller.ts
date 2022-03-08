import { GetAllJobRequests } from '../../../../application/job-request';
import { Response, Request } from 'express';

const GetAllJobRequestsController = async (_req: Request, res: Response) => {
    const users = await GetAllJobRequests();
    res.json(users);
};

export default GetAllJobRequestsController;
