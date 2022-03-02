import {
    Entity,
    Column,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import Candidacy from './Candidacy';
import Client from './Client';

@Entity()
export default class JobRequest {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Client, (client) => client.jobRequests)
    client: Client;

    @Column()
    jobFunction: string;

    @OneToMany(() => Candidacy, (candidacy) => candidacy.jobRequest)
    candidacies: Candidacy[];
}
