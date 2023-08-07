import { ManagerEntity } from "src/manager/manager.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Traveler')
export class TravelerEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    email:string;
    @Column()
    contact:number;

    @ManyToOne(() => ManagerEntity, manager => manager.travelers)
        manager:ManagerEntity;
}