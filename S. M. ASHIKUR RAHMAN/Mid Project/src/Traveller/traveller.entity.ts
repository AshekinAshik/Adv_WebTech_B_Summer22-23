import { TourguidEntity } from "src/Tourguid/tourguid.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('traveller')
export class TravellerEntity {
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
    photoFileName:string;
    

    @OneToMany(() => TourguidEntity, tourguid => tourguid.traveller, {cascade: ["remove"]})
    tourguid:TourguidEntity[];

}
