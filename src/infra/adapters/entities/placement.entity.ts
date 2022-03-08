import {
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import Candidacy from './candidacy.entity';
import Client from './client.entity';
import User from './user.entity';

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
