import { DeleteResult } from 'typeorm';
import Candidacy from '../models/candidacy.model';
import Client from '../models/client.model';
import Placement from '../models/placement.model';
import User from '../models/user.model';

export type GetPlacementByIdParams = {
    id: string;
};

export type CreatePlacementParams = {
    id?: string;
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

export type PlacementResponse = {
    placement?: Placement;
    error?: string;
};

export default interface PlacementRepository {
    getAllPlacements(): Promise<Placement[]>;
    getPlacementById(params: GetPlacementByIdParams): Promise<Placement>;
    createPlacement(params: CreatePlacementParams): Promise<Placement>;
    updatePlacement(params: UpdatePlacementParams): Promise<PlacementResponse>;
    deletePlacement(params: DeletePlacementParams): Promise<DeleteResult>;
}
