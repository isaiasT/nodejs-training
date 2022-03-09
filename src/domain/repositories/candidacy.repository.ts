import { DeleteResult } from 'typeorm';
import Candidacy from '../models/candidacy.model';
import JobRequest from '../models/jobRequest.model';
import User from '../models/user.model';

export type GetCandidacyByIdParams = {
    id: string;
};

export type CreateCandidacyParams = {
    id?: string;
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

export type CandidacyResponse = {
    candidacy?: Candidacy;
    error?: string;
};

export default interface CandidacyRepository {
    getAllCandidacies(): Promise<Candidacy[]>;
    getCandidacyById(params: GetCandidacyByIdParams): Promise<Candidacy>;
    createCandidacy(params: CreateCandidacyParams): Promise<Candidacy>;
    updateCandidacy(params: UpdateCandidacyParams): Promise<CandidacyResponse>;
    deleteCandidacy(params: DeleteCandidacyParams): Promise<DeleteResult>;
}
