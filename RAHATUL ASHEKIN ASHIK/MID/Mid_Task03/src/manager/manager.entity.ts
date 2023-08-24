import { TravelerEntity } from "src/traveler/traveler.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Manager')
export class ManagerEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({length:150})
    name:string;
    @Column({length:80})
    username:string;
    @Column()
    email:string;
    @Column()
    contact:number;
    @Column()
    password:string;

    @OneToMany(() => TravelerEntity, traveler => traveler.manager)
        travelers:TravelerEntity[];
}