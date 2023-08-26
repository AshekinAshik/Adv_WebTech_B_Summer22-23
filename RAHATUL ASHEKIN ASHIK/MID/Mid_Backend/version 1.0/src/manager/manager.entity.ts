import { TourGuideEntity } from "src/tourguide/tourguide.entity";
import { TravellerEntity } from "src/traveller/traveller.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

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
                    name:'managerId'
                    //referencedColumnName: 'id'
                },
            }
        )
        tourguides: TourGuideEntity[];

    @OneToMany(() => HotelEntity, hotel => hotel.manager)
        hotels:HotelEntity[];

    
}

@Entity('Hotel')
export class HotelEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    email:string;
    @Column()
    contact:number;
    @Column()
    location:string;
    @Column({nullable:true})
    managerId:number;

    @ManyToOne(() => ManagerEntity, manager => manager.hotels)
    @JoinColumn({name: 'managerId'})
        manager:ManagerEntity;
}