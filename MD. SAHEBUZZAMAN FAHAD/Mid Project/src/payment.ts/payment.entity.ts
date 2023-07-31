// import { AdminEntity } from "src/admin/admin.entity";
// import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

// @Entity('payment')
// export class PaymentEntity {
//     @PrimaryColumn()
//     id:number;

//     @Column()
//     coustomerName:string;
//     @Column({length:150})
//     product:string;
//     @Column()
//     price:number;
//     @Column({unique:true})
//     contact:number;
//     @Column()
//     date:string;
//     @Column({nullable:true})
//     adminID :number

//     @ManyToOne(() => AdminEntity, admin => admin.tourguid, {onDelete:"CASCADE"})
//     @JoinColumn({name:'adminID'})
//     admin: AdminEntity;
// }