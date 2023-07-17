import { TourGuideEntity } from "src/TourGuide/tg.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('Manager')
export class ManagerEntity {
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
    password:string;
    @Column({nullable:true})
    photoFileName:string;

    //tourguideID:number;

    @ManyToMany(() => TourGuideEntity, tourguide => tourguide.managers)
    
    tourguides: TourGuideEntity[];
    
}