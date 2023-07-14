import { TourGuideEntity } from "src/tourguide/tourguide.entity";
import { TravellerEntity } from "src/traveller/traveller.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

// @Entity('Manager_Info')
// export class ManagerInfoEntity {
//     @PrimaryColumn()
//     id:number;
//     @Column()
//     name:string;
//     @Column()
//     email:string;
//     @Column()
//     contact:number;

//     @ManyToMany(() => TourGuideEntity, tourguide => tourguide.managerinfos)
//     @JoinTable(
//         {
//             name:'Manager_TourGuide',
//             joinColumn: {
//                 name:'managerID',
//                 referencedColumnName: 'id'
//             },
//         }
//     )
//     tourguides: TourGuideEntity[];
// }

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

    @OneToMany(() => TravellerEntity, traveller => traveller.manager, {cascade: ["remove"]})
        travellers:TravellerEntity[];
    
    @ManyToMany(() => TourGuideEntity, tourguide => tourguide.managers)
        @JoinTable(
            {
                name:'Manager_TourGuide',
                joinColumn: {
                    name:'managerID',
                    referencedColumnName: 'id'
                },
            }
        )
        tourguides: TourGuideEntity[];
    
    // @OneToOne(() => ManagerInfoEntity, {eager:true})
    //     managerInfo:ManagerInfoEntity;
}