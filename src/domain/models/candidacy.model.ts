import JobRequest from './jobRequest.model';
import User from './user.model';

export default interface Candidacy {
    id: string;
    jobRequest: JobRequest;
    user: User;
    status: string;
}
