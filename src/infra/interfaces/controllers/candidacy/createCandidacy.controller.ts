import { CreateCandidacy } from '../../../../application/candidacy';
import { Response, Request } from 'express';
import checkRequired from '../../../../utils/checkRequired';
import { body } from 'express-validator';
import { validationResult } from 'express-validator';

const requiredBodyFields = ['jobRequest', 'user', 'status'];

const CreateCandidacyValidators = [
    ...requiredBodyFields.map((field) => {
        return body(field).custom(async (value) => {
            await checkRequired(value, field);
        });
    }),
];

const CreateCandidacyController = async (req: Request, res: Response) => {
    try {
        validationResult(req).throw();

        const results = await CreateCandidacy({
            id: req.body.id,
            jobRequest: req.body.jobRequest,
            user: req.body.user,
            status: req.body.status,
        });
        res.json(results);
    } catch (err) {
        res.status(400).json(err);
    }
};

export { CreateCandidacyController, CreateCandidacyValidators };
