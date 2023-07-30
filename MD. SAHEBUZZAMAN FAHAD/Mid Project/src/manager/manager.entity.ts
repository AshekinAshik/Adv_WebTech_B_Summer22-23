import { AdminEntity } from "src/admin/admin.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('manager')
export class ManagerEntity {
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
    adminID :number


    @ManyToOne(() => AdminEntity, admin => admin.manager, {onDelete:"CASCADE"})
    @JoinColumn({name:'adminID'})
    admin: AdminEntity;


    @ManyToMany(() => AdminEntity, admin => admin.manager)
    products: AdminEntity[];

}