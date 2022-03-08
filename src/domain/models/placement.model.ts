import Candidacy from './candidacy.model';
import Client from './client.model';
import User from './user.model';

export default interface Placement {
    id: string;
    user: User;
    client: Client;
    candidacy: Candidacy;
}
