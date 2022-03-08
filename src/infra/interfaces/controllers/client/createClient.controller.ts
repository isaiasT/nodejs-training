import { CreateClient } from '../../../../application/client';
import { Response, Request } from 'express';

const CreateClientController = async (req: Request, res: Response) => {
    const results = await CreateClient({
        name: req.body.name,
        country: req.body.country,
    });
    res.json(results);
};

export default CreateClientController;
