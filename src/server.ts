import express, { Response, Request } from 'express';
import bodyParser from 'body-parser';
import Rollbar from 'rollbar';
import userRoutes from './infra/interfaces/routes/user.routes';
import clientRoutes from './infra/interfaces/routes/client.routes';
import jobRequestRoutes from './infra/interfaces/routes/jobRequest.routes';
import candidacyRoutes from './infra/interfaces/routes/candidacy.routes';
import placementRoutes from './infra/interfaces/routes/placement.routes';

const Server = () => {
    const app = express();

    app.use(bodyParser.json());

    const rollbar = new Rollbar({
        accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
        captureUncaught: true,
        captureUnhandledRejections: true,
    });

    app.get('/', (_req: Request, res: Response) => {
        res.send('API under construction');
    });

    app.get('/query', (req: Request, res: Response) => {
        res.send(req.query);
    });

    app.use(rollbar.errorHandler());

    app.use('/', userRoutes);
    app.use('/', clientRoutes);
    app.use('/', jobRequestRoutes);
    app.use('/', candidacyRoutes);
    app.use('/', placementRoutes);

    return app;
};

export { Server };
