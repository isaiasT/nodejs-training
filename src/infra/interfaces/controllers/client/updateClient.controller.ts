import { UpdateClient } from '../../../../application/client';
import { Response, Request } from 'express';
import { validationResult } from 'express-validator';
import { body } from 'express-validator';

const UpdateClientValidators = [
    body('email', 'Invalid email').optional().isEmail(),
];

const UpdateClientController = async (req: Request, res: Response) => {
    try {
        validationResult(req).throw();

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
    } catch (err) {
        res.status(400).json(err);
    }
};

export { UpdateClientController, UpdateClientValidators };
