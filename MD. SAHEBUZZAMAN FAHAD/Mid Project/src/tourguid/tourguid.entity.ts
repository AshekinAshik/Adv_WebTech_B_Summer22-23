import { AdminEntity } from "src/admin/admin.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tourguid')
export class TourGuidEntity {
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
    @Column({nullable:true})
    adminID :number

    @ManyToOne(() => AdminEntity, admin => admin.tourguid, {onDelete:"CASCADE"})
    @JoinColumn({name:'adminID'})
    admin: AdminEntity;
}