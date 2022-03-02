import { GetClientById } from '../../core/useCases';
import { Response, Request } from 'express';

const GetAllClientsController = async (req: Request, res: Response) => {
    const user = await GetClientById({ id: req.params.id });
    res.json(user);
};

export default GetAllClientsController;
