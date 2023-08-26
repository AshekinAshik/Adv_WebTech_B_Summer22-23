import { TravellerEntity } from "src/Traveller/traveller.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tourguid')
export class TourguidEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({length:150})
    fastname:string;
    @Column({length:80})
    lastname:string;
    @Column({unique:true})
    email:string;
    @Column()
    contact:number;
    @Column()
    password:string;
    @Column({nullable:true})
    travellerID:number;
   

    @ManyToOne(() => TravellerEntity, traveller => traveller.tourguid, {onDelete:"CASCADE"})
    @JoinColumn({name:'travellerID'})
    traveller: TravellerEntity;
    travellerId: number;
}
