import Candidacy from './candidacy.model';
import Placement from './placement.model';

export default interface User {
    id: string;
    name: string;
    availability: string;
    email: string;
    country: string;
    candidacies?: Candidacy[];
    placements?: Placement[];
}
