import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import JobRequest from './jobRequest.entity';
import User from './user.entity';

@Entity()
export default class Candidacy {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => JobRequest, (jobRequest) => jobRequest.candidacies)
    jobRequest: JobRequest;

    @ManyToOne(() => User, (user) => user.candidacies)
    user: User;

    @Column()
    status: string;
}
