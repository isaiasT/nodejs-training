import User from '../src/core/entities/User';
import { TestFactory } from '../testUtils/factory';
import _ from 'lodash';

describe('Testing user component', () => {
    const factory: TestFactory = new TestFactory();
    const testUser: User = User.mockTestUser();
    // const testUserModified: User = {
    //     ...testUser,
    //     name: 'testNameModified',
    // };

    beforeAll(async () => {
        await factory.init();
    });

    afterAll(async () => {
        await factory.close();
    });

    describe('POST /users', () => {
        it('responds with status 400', async () => {
            const response = await factory.app.post('/users').send();
            expect(response.status).toEqual(400);
        });

        it('responds with new user', async () => {
            const response = await factory.app.post('/users').send(testUser);
            const user: User = response.body;
            expect(_.omit(user, 'id')).toEqual(testUser);
        });
    });
});
