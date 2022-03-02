import {
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import Candidacy from './Candidacy';
import Client from './Client';
import User from './User';

@Entity()
export default class Placement {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, (user) => user.placements)
    user: User;

    @ManyToOne(() => Client, (client) => client.placements)
    client: Client;

    @OneToOne(() => Candidacy)
    @JoinColumn()
    candidacy: Candidacy;
}
