import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    country: string;
}
