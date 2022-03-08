import { GetClientById } from '../../../../application/client';
import { Response, Request } from 'express';

const GetClientByIdController = async (req: Request, res: Response) => {
    const client = await GetClientById({ id: req.params.id });
    res.json(client);
};

export default GetClientByIdController;
