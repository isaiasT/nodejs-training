import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import JobRequest from './JobRequest';
import Placement from './Placement';

@Entity()
export default class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    country: string;

    @OneToMany(() => JobRequest, (jobRequest) => jobRequest.client)
    jobRequests: JobRequest[];

    @OneToMany(() => Placement, (placement) => placement.client)
    placements: Placement[];
}
