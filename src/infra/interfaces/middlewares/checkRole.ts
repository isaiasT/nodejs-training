import { Request, Response, NextFunction } from 'express';
import Role from '../../../domain/models/role.model';

export const checkRole = (roles: Array<string>) => {
    return async (_req: Request, res: Response, next: NextFunction) => {
        const userId = res.locals.jwtPayload.userId;

        if (userId) {
            const role = Role.User;

            if (roles.indexOf(role) > -1) {
                next();
            } else {
                res.status(401).send({ errors: [{ msg: 'Unauthorized' }] });
            }
        } else {
            const clientId = res.locals.jwtPayload.clientId;

            if (clientId) {
                const role = Role.Client;

                if (roles.indexOf(role) > -1) {
                    next();
                } else {
                    res.status(401).send({ errors: [{ msg: 'Unauthorized' }] });
                }
            }
        }
    };
};
