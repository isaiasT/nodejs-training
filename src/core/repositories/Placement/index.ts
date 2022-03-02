import { DeleteResult } from 'typeorm';
import Candidacy from '../../entities/Candidacy';
import Client from '../../entities/Client';
import Placement from '../../entities/Placement';
import User from '../../entities/User';

export type GetPlacementByIdParams = {
    id: string;
};

export type CreatePlacementParams = {
    user: User;
    client: Client;
    candidacy: Candidacy;
};

export type UpdatePlacementParams = {
    id: string;
    user?: User;
    client?: Client;
    candidacy?: Candidacy;
};

export type DeletePlacementParams = {
    id: string;
};

export default interface PlacementRepository {
    getAllPlacements(): Promise<Placement[]>;
    getPlacementById(params: GetPlacementByIdParams): Promise<Placement>;
    createPlacement(params: CreatePlacementParams): Promise<Placement>;
    updatePlacement(params: UpdatePlacementParams): Promise<Placement>;
    deletePlacement(params: DeletePlacementParams): Promise<DeleteResult>;
}
