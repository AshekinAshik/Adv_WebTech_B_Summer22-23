//import==> traveler ata class create kore aiter modde import korte hobe
import { ManagerEntity } from "src/Manager/manager.entiry";
import { TravellerEntity } from "src/Traveller/traveller.entiry";
import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";



@Entity('Tourguide')
export class TourGuideEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({name:'name',type:"varchar" ,length: 150})
    name: string;
    @Column({type:"varchar",length: 150})
    email: string;
    @Column({})
    password:string;
    @Column({})
    contact_number:number;
    @Column({})
    filename:string;

    @OneToMany(()=>TravellerEntity, traveller=>traveller.tourguide)
    travellers:TravellerEntity[];
    
    @ManyToMany(()=>ManagerEntity, manager=>manager.tourguides)
    managers: ManagerEntity[];


}

@Entity('Traveller_Payment')
export class PaymentEntity{
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column({name:'name',type:"varchar" ,length: 150})
    name:string;

    @Column({type:"varchar",length: 150})
    email:string;

    @Column()
    contact_number:number;

    @Column()
    location:string;

    @Column()
    amount:number;


    tourguideID:number;

}

@Entity('Create_TourPack')
export class createTourPackEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:'packname',type:"varchar", length:150})
    name:string;

    @Column()
    startdestination:string;
    
    @Column()
    enddestination:string;

    @Column()
    totalduration:number;

    @Column()
    totalamount:number;
    
    @Column({nullable:true})
    tourguideID:number;
}

@Entity('HotelandVehicle')
export class createhotelandvehivleEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:'hotelname',type:"varchar", length:150})
    hotelname:string;
    
    @Column()
    hoteltype:string;

    @Column()
    hotellocation:string;

    @Column()
    stayamount:number;

    @Column({name:'vehiclename',type:"varchar", length:150})
    vehiclename:string;
    
    @Column()
    vehicletype:string;

    @Column()
    startdestination:string;

    @Column()
    Enddestination:string;

    @Column()
    travelamount:number;

}

