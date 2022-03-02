import { DeleteResult } from 'typeorm';
import Candidacy from '../../entities/Candidacy';
import JobRequest from '../../entities/JobRequest';
import User from '../../entities/User';

export type GetCandidacyByIdParams = {
    id: string;
};

export type CreateCandidacyParams = {
    jobRequest: JobRequest;
    user: User;
    status: string;
};

export type UpdateCandidacyParams = {
    id: string;
    jobRequest?: JobRequest;
    user?: User;
    status?: string;
};

export type DeleteCandidacyParams = {
    id: string;
};

export default interface CandidacyRepository {
    getAllCandidacies(): Promise<Candidacy[]>;
    getCandidacyById(params: GetCandidacyByIdParams): Promise<Candidacy>;
    createCandidacy(params: CreateCandidacyParams): Promise<Candidacy>;
    updateCandidacy(params: UpdateCandidacyParams): Promise<Candidacy>;
    deleteCandidacy(params: DeleteCandidacyParams): Promise<DeleteResult>;
}
