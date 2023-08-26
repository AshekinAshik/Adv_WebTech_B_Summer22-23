import { ManagerEntity } from "src/manager/manager.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Tour_Guide')
export class TourGuideEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({length:150})
    name:string;
    @Column({length:80, unique:true})
    username:string;
    @Column()
    email:string;
    @Column()
    contact:number;
    @Column()
    age:number;
    @Column()
    location:string;

    @ManyToMany(() => ManagerEntity, manager => manager.tourguides)
        managers: ManagerEntity[];
}