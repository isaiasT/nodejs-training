import { Response, Request } from 'express';
import { validationResult } from 'express-validator';
import { body } from 'express-validator';
import checkRequired from '../../../../utils/checkRequired';
import { getConnection } from 'typeorm';
import User from '../../../../domain/models/user.model';
import UserEntity from '../../../adapters/entities/user.entity';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import _ from 'lodash';

const requiredBodyFields = ['email', 'password'];

const LoginUserValidators = [
    ...requiredBodyFields.map((field) => {
        return body(field).custom(async (value) => {
            await checkRequired(value, field);
        });
    }),
    body('email', 'Invalid email').isEmail(),
];

const LoginUserController = async (req: Request, res: Response) => {
    try {
        validationResult(req).throw();

        const repositoryORM = getConnection().getRepository<User>(UserEntity);
        const user = await repositoryORM
            .createQueryBuilder('user')
            .where('user.email = :email', { email: req.body.email })
            .getOne();

        if (user && (await bcrypt.compare(req.body.password, user.password))) {
            const token = jwt.sign(
                { userId: user.id, email: user.email },
                process.env.TOKEN_SECRET,
                {
                    expiresIn: '2h',
                },
            );

            res.json(_.omit({ ...user, token }, 'password'));
        } else {
            res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
        }
    } catch (err) {
        res.status(400).json(err);
    }
};

export { LoginUserValidators, LoginUserController };
