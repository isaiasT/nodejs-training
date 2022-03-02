import { CreateJobRequest } from '../../core/useCases/JobRequest';
import { Response, Request } from 'express';

const CreateJobRequestController = async (req: Request, res: Response) => {
    const results = await CreateJobRequest({
        client: req.body.client,
        jobFunction: req.body.jobFunction,
    });
    res.json(results);
};

export default CreateJobRequestController;
