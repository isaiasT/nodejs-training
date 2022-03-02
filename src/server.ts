import express, { Response, Request } from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import Rollbar from 'rollbar';
import { createConnection } from 'typeorm';
import userRoutes from './api/User.routes';
import clientRoutes from './api/Client.routes';
import jobRequestRoutes from './api/JobRequest.routes';
import candidacyRoutes from './api/Candidacy.routes';
import placementRoutes from './api/Placement.routes';

createConnection().then(() => {
    const app = express();
    const port = 3000;

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

    app.listen(port, () => {
        console.log(`NodeJS Training running on port ${port}`);
    });
});
