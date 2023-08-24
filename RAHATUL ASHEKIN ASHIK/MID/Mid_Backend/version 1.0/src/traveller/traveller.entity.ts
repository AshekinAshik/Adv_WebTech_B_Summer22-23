import { ManagerEntity } from "src/manager/manager.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Traveller')
export class TravellerEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
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
    gender:string;
    @Column()
    profession:string;
    @Column({nullable:true})
    managerID:number;

    @ManyToOne(() => ManagerEntity, manager => manager.travellers, {onDelete:"CASCADE"})
    @JoinColumn({name:'managerID'})
        manager:ManagerEntity;
}
