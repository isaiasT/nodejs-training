import 'dotenv/config';
import { createConnection } from 'typeorm';
import { Server } from './server';

const port = 3000;

const app = Server();

createConnection().then(() => {
    app.listen(port, () => {
        console.log(`NodeJS Training running on port ${port}`);
    });
});

export { app };
