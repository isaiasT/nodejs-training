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

    public static mockTestUser(): User {
        const user = new User();

        user.email = 'test@email.com';
        user.name = 'testName';
        user.availability = 'testAvailability';
        user.country = 'testCountry';

        return user;
    }
}
