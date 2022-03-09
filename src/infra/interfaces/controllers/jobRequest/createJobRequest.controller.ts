import { CreateJobRequest } from '../../../../application/job-request';
import { Response, Request } from 'express';
import checkRequired from '../../../../utils/checkRequired';
import { body } from 'express-validator';
import { validationResult } from 'express-validator';

const requiredBodyFields = ['client', 'jobFunction'];

const CreateJobRequestValidators = [
    ...requiredBodyFields.map((field) => {
        return body(field).custom(async (value) => {
            await checkRequired(value, field);
        });
    }),
];

const CreateJobRequestController = async (req: Request, res: Response) => {
    try {
        validationResult(req).throw();

        const results = await CreateJobRequest({
            id: req.body.id,
            client: req.body.client,
            jobFunction: req.body.jobFunction,
        });
        res.json(results);
    } catch (err) {
        res.status(400).json(err);
    }
};

export { CreateJobRequestController, CreateJobRequestValidators };
