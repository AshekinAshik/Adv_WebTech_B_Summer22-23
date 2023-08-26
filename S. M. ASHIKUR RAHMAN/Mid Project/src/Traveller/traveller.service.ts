import { Injectable, } from "@nestjs/common";
import { TravellerDto, TravellerLoginDto, travellerMessageDTO } from "./traveller.dto";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { InjectRepository } from "@nestjs/typeorm";
import { TravellerEntity } from "./traveller.entity";
import { TourguidEntity } from "src/tourguid/tourguid.entity";
import { TourguidDto } from "src/Tourguid/tourguid.dto";
import { MailerService } from "@nestjs-modules/mailer";


@Injectable()
export class TravellerService {
    adminRepo: any;
    
    

    constructor(
        private readonly mailerService:MailerService,
    @InjectRepository(TravellerEntity)
            private travellerRepo:Repository<TravellerEntity>,
            @InjectRepository(TourguidEntity)
            private tourguidRepo:Repository<TourguidEntity>
    ) {}

  
    async travellerReg (aminRegInfo:TravellerDto) : Promise<TravellerEntity> {
        const salt = await bcrypt.genSalt();
        aminRegInfo.password = await bcrypt.hash(aminRegInfo.password, salt);

        return this.travellerRepo.save(aminRegInfo);
    }

    async loginTraveller (travellerLogininfo:TravellerLoginDto) {
        const traveller = await this.travellerRepo.findOneBy({email:travellerLogininfo.email});
        // console.log(traveller);
        const isMatch:boolean = await bcrypt.compare(travellerLogininfo.password, traveller.password);
        console.log(isMatch);
        return isMatch;

    }

    async uploadTraveller (fileName:string, email:string) {
        const traveller = await this.travellerRepo.findOneBy({email:email});
        console.log(email);
        if (traveller) {
            traveller.photoFileName = fileName;
            await this.travellerRepo.save(traveller);
            return "Traveller Photo Uploaded!";
        }
        return "Tourguid Photo Couldn't be Uploaded!";
    }


    async regTourguid (tourguidLogInfo:TourguidDto, travellerEmail:string) : Promise<TourguidEntity> {
        const traveller = await this.travellerRepo.findOneBy({email:travellerEmail});
        tourguidLogInfo.travellerID = traveller.id;
    console.log(tourguidLogInfo.travellerID)
        return this.tourguidRepo.save(tourguidLogInfo);
    }

    async gettourguidBytravellerId (travellerEmail:string) {
        console.log(travellerEmail);
        const traveller  = await this.travellerRepo.findOneBy({email:travellerEmail});
        const travellerId = traveller.id;

        return this.travellerRepo.find(
            {
                where: {id:travellerId},
                relations: {tourguid:true}
            }

    
        

        ) 
    }

    async gettourguidBytraveller () : Promise<TourguidEntity[]>{
        return this.tourguidRepo.find({
            relations : ({traveller :true})
        })
    }

    async updatetravellerInfo (travellerUpdateInfo:TravellerDto, managerEmail:string) : Promise<TravellerEntity> {
        const traveller = await this.travellerRepo.findOneBy({email:managerEmail});
        travellerUpdateInfo.id = traveller.id;

        const salt = await bcrypt.genSalt();
        travellerUpdateInfo.password = await bcrypt.hash(travellerUpdateInfo.password, salt);

        await this.travellerRepo.update({id:traveller.id}, travellerUpdateInfo);
        console.log("update!");
        return this.travellerRepo.findOneBy({id:traveller.id});
    }

    async deleteTourguid (tourguidId:number, useremail:string) {
        const tourguid = await this.tourguidRepo.findOneBy({id:tourguidId});
        const traveller = await this.travellerRepo.findOneBy({email:useremail});
        const travellerId = traveller.id;
    console.log(travellerId)
        if (tourguid.travellerID == travellerId) {
            await this.tourguidRepo.delete(tourguidId);
            return "Tour Guid Deleted!";
        } else {
            return "Couldn't Delete!";
        }
    }

    async sendMailtourguid (messageData:travellerMessageDTO, travellerEmail:string) {
        const traveller = await this.travellerRepo.findOneBy({email:travellerEmail});
        const travellerName = traveller.lastname;


        await this.mailerService.sendMail(
            {
                to: "rafshanrahman980@gmail.com",
                subject: "From traveller: " + travellerName,
                text: messageData.message,
            }
        );
    }

    async updatetourguidInfo (travelerUpdateInfo:TourguidDto, travellerEmail:string) : Promise<TourguidDto> {
        const traveller = await this.travellerRepo.findOneBy({email:travellerEmail});
        travelerUpdateInfo.travellerID = traveller.id;

        const salt = await bcrypt.genSalt();
        travelerUpdateInfo.password = await bcrypt.hash(travelerUpdateInfo.password, salt);

        await this.tourguidRepo.update({id:travelerUpdateInfo.id}, travelerUpdateInfo);
        console.log("update!");
        return this.tourguidRepo.findOneBy({id:travelerUpdateInfo.id});
    }

}

