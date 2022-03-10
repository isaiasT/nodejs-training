import Chance from 'chance';

const chance = new Chance();

const UserIds = [
    '516d50c9-02e0-48d4-aaca-776cd4684a0a',
    'b2cc5ede-a228-4cdd-beea-dc1c3b846114',
    '6ea0a6ea-7a15-4b58-92a5-52ef509174ef',
    'ad0e4e8e-1f2b-4842-9a18-8c13ce2d33e1',
    '9f0f4667-153e-4797-8afc-1ab85a04fdb5',
    '850b9607-af6b-4b2b-b22e-8554a12e8f51',
];

const UserSeed = [];

const total = 5;

// Devandtalent1-
const encryptedPassword =
    '$2a$10$nq9tyBsbbLtzQZgT8YICtubjEvPmMrwK64io/V8NdSKzVlLNSS.P.';

for (let index = 0; index < total; index++) {
    UserSeed.push({
        id: UserIds[index],
        email: chance.email(),
        name: `${chance.first()} ${chance.last()}`,
        availability: chance.pickone(['weekdays', 'weekend']),
        country: chance.pickone(['Spain', 'Portugal', 'US', 'UK']),
        password: encryptedPassword,
    });
}

export { UserSeed, UserIds };
