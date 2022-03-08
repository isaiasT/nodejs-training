import { UpdateClient } from '../../../../application/client';
import { Response, Request } from 'express';

const UpdateClientController = async (req: Request, res: Response) => {
    const results = await UpdateClient({
        id: req.params.id,
        name: req.body.name,
        country: req.body.country,
    });

    if (results.error) {
        res.status(400).json(results);
    } else {
        res.json(results.client);
    }
};

export default UpdateClientController;
