import { TestFactory } from './test-utils/factory';

describe('Testing Server endpoints', () => {
    const factory: TestFactory = new TestFactory();
    const testQuery = {
        name: 'Isaias',
        occupation: 'Developer',
    };

    beforeAll(async () => {
        await factory.init();
    });

    afterAll(async () => {
        await factory.close();
    });

    describe('GET /', () => {
        it('responds with custom message', async () => {
            const response = await factory.app.get('/');
            expect(response.text).toEqual('API under construction');
        });
    });

    describe('GET /query', () => {
        it('responds with the query', async () => {
            const response = await factory.app.get('/query').query(testQuery);
            expect(response.body).toEqual(testQuery);
        });
    });
});
