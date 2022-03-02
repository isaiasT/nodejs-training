import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Candidacy from './Candidacy';
import Placement from './Placement';

@Entity()
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    availability: string;

    @Column()
    email: string;

    @Column()
    country: string;

    @OneToMany(() => Candidacy, (candidacy) => candidacy.user)
    candidacies: Candidacy[];

    @OneToMany(() => Placement, (placement) => placement.user)
    placements: Placement[];
}
