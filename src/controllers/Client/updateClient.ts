import { UpdateClient } from '../../core/useCases';
import { Response, Request } from 'express';

const UpdateClientController = async (req: Request, res: Response) => {
    const results = await UpdateClient({
        id: req.params.id,
        name: req.body.name,
        country: req.body.country,
    });
    res.json(results);
};

export default UpdateClientController;
