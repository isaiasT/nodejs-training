import { UpdateUser } from '../../core/useCases';
import { Response, Request } from 'express';

const UpdateUserController = async (req: Request, res: Response) => {
    const results = await UpdateUser({
        id: req.params.id,
        name: req.body.name,
        availability: req.body.availability,
        email: req.body.email,
        country: req.body.country,
    });
    res.json(results);
};

export default UpdateUserController;
