import { ManagerEntity } from "src/manager/manager.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Traveller')
export class TravellerEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    username:string;
    @Column()
    email:string;
    @Column()
    contact:number;
    @Column()
    age:number;
    @Column()
    gender:string;
    @Column()
    profession:string;
    @Column({nullable:true})
    managerID:number;

    @ManyToOne(() => ManagerEntity, manager => manager.travellers)
    @JoinColumn({name:'managerID'})
        manager:ManagerEntity;
}