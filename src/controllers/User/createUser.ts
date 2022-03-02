import { CreateUser } from '../../core/useCases';
import { Response, Request } from 'express';

const CreateUserController = async (req: Request, res: Response) => {
    const results = await CreateUser({
        name: req.body.name,
        availability: req.body.availability,
        email: req.body.email,
        country: req.body.country,
    });
    res.json(results);
};

export default CreateUserController;
