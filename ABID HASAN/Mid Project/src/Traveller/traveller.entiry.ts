import { IsNotEmpty } from "class-validator";
import { count } from "console";
import { TourGuideEntity } from "src/TourGuide/tg.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("Traveller")
export class TravellerEntity{

@PrimaryGeneratedColumn()
id: number;

@Column({name:'name', type:"varchar", length:150})
name:string;

@Column({length:80, unique:true})
username:string;

@Column({type:"varchar",length: 150})
email: string;

@Column({})
contact_number:number;

@Column()
age:number;

@Column()
gender:string;

@Column()
profession: string;

// @Column()
// filename:string;

@Column({nullable:true})
tourguideID:number;

@ManyToOne(()=>TourGuideEntity,tourguide=>tourguide.travellers,{onDelete:"CASCADE"})
@JoinColumn({name:'tourguideID'})
tourguide:TourGuideEntity;
}