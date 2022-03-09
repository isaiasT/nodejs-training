import { DeleteJobRequest } from '../../../../application/job-request';
import { Response, Request } from 'express';

const DeleteJobRequestController = async (req: Request, res: Response) => {
    const results = await DeleteJobRequest({ id: req.params.id });

    if (results.affected) {
        res.json(results);
    } else {
        res.status(400).json({ error: "JobRequest doesn't exist" });
    }
};

export default DeleteJobRequestController;
