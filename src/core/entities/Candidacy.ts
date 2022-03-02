import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import JobRequest from './JobRequest';

@Entity()
export default class Candidacy {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => JobRequest, (jobRequest) => jobRequest.candidacies)
    jobRequest: JobRequest;

    @Column()
    status: string;
}
