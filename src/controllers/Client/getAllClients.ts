import { GetAllClients } from '../../core/useCases';
import { Response, Request } from 'express';

const GetAllClientsController = async (_req: Request, res: Response) => {
    const users = await GetAllClients();
    res.json(users);
};

export default GetAllClientsController;
