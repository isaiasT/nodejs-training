import JobRequest from './jobRequest.model';
import Placement from './placement.model';

export default interface Client {
    id: string;
    name: string;
    country: string;
    email: string;
    password: string;
    jobRequests?: JobRequest[];
    placements?: Placement[];
}
