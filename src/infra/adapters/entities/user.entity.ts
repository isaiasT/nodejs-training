import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Candidacy from './candidacy.entity';
import Placement from './placement.entity';

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
