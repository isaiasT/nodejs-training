import { createConnection, ConnectionOptions, Connection } from 'typeorm';
import { createServer, Server as HttpServer } from 'http';

import express from 'express';
import supertest from 'supertest';

import { Server } from '../server';

export class TestFactory {
    private _app: express.Application;
    private _connection: Connection;
    private _server: HttpServer;
    private _NODE_PORT = 3003;

    private options: ConnectionOptions = {
        type: 'sqljs',
        database: new Uint8Array(),
        location: 'database',
        logging: false,
        synchronize: true,
        entities: ['src/infra/adapters/entities/*.ts'],
    };

    public get app(): supertest.SuperTest<supertest.Test> {
        return supertest(this._app);
    }

    public get connection(): Connection {
        return this._connection;
    }

    public get server(): HttpServer {
        return this._server;
    }

    public async init(): Promise<void> {
        this._connection = await createConnection(this.options);
        this._app = Server();
        this._server = createServer(this._app).listen(this._NODE_PORT);
    }

    public async close(): Promise<void> {
        this._server.close();
        this._connection.close();
    }
}
