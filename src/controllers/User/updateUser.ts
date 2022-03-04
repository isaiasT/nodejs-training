import { UpdateUser } from '../../core/useCases/User';
import { Response, Request } from 'express';
import { validationResult } from 'express-validator';
import { body } from 'express-validator';

const UpdateUserValidators = [
    body('email', 'Invalid email').optional().isEmail(),
];

const UpdateUserController = async (req: Request, res: Response) => {
    try {
        validationResult(req).throw();

        const results = await UpdateUser({
            id: req.params.id,
            name: req.body.name,
            availability: req.body.availability,
            email: req.body.email,
            country: req.body.country,
        });

        if (results.error) {
            res.status(400).json(results);
        } else {
            res.json(results.user);
        }
    } catch (err) {
        res.status(400).json(err);
    }
};

export { UpdateUserController, UpdateUserValidators };
