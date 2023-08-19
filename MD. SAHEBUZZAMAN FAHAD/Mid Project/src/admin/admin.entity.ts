import { ManagerEntity } from "src/manager/manager.entity";
import { TourGuidEntity } from "src/tourguid/tourguid.entity";
import { TravelerEntity } from "src/traveler/traveler.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('admin')
export class AdminEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 150 })
    fastname: string;
    @Column({ length: 80 })
    lastname: string;
    @Column({ unique: true })
    email: string;
    @Column()
    contact: number;
    @Column()
    password: string;
    @Column({ nullable: true })
    filename: string;

    @OneToMany(() => ManagerEntity, manager => manager.admin, { cascade: ["remove"] })
    manager: ManagerEntity[];

    @OneToMany(() => TravelerEntity, traveler => traveler.admin, { cascade: ["remove"] })
    traveler: TravelerEntity[];

    @OneToMany(() => TourGuidEntity, tourguid => tourguid.admin, { cascade: ["remove"] })
    tourguid: TourGuidEntity[];

    @ManyToMany(() => ManagerEntity, manager => manager.admin)
    @JoinTable()
    categories: ManagerEntity[];
}