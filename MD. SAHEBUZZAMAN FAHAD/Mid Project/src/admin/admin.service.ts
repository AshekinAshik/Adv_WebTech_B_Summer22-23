import { Injectable, } from "@nestjs/common";
import { AdminDto, AdminLoginDto, AdminMessageDTO } from "./admin.dto";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { InjectRepository } from "@nestjs/typeorm";
import { AdminEntity } from "./admin.entity";
import { ManagerEntity } from "src/manager/manager.entity";
import { ManagerDto } from "src/manager/manager.dto";
import { TravelerEntity } from "src/traveler/traveler.entity";
import { TourGuidDto } from "src/tourguid/tourguid.dto";
import { TourGuidEntity } from "src/tourguid/tourguid.entity";
import { TravelerDto } from "src/traveler/traveler.dto";
import { MailerService } from "@nestjs-modules/mailer";
//import { PaymentEntity } from "src/payment.ts/payment.entity";

@Injectable()
export class AdminService {
    

    constructor(
            private readonly mailerService:MailerService,
            @InjectRepository(AdminEntity)
            private adminRepo:Repository<AdminEntity>,

            @InjectRepository(ManagerEntity)
            private managerrepo:Repository<ManagerEntity>,

            @InjectRepository(TravelerEntity)
            private travelerRepo:Repository<TravelerEntity>,

            @InjectRepository(TourGuidEntity)
            private turGuidRepo:Repository<TourGuidEntity>,
    ) {}

  
    async adminReg (aminRegInfo:AdminDto) : Promise<AdminEntity> {
        const salt = await bcrypt.genSalt();
        aminRegInfo.password = await bcrypt.hash(aminRegInfo.password, salt);

        return this.adminRepo.save(aminRegInfo);
    }

    // async paymenH (paymentInfo:PaymentEntity) : Promise<PaymentEntity> {

    //     return this.adminRepo.save(paymentInfo);
    // }


    async loginAdmin (adminLogininfo:AdminLoginDto) {
        const admin = await this.adminRepo.findOneBy({email:adminLogininfo.email});
         console.log(admin);
        const isMatch:boolean = await bcrypt.compare(adminLogininfo.password, admin.password);
        console.log(isMatch);
        return isMatch;

    }


    async uploadAdmin (fileName:string, email:string) {
        const admin = await this.adminRepo.findOneBy({email:email});
       
        if (admin) {
            admin.filename = fileName;
            await this.adminRepo.save(admin);
            return "Admin Photo Uploaded!";
        }
        return "Admin Photo Couldn't be Uploaded!";
    }



    async regManager (managerLogInfo:ManagerDto, adminEmail:string) : Promise<ManagerEntity> {
        const admin = await this.adminRepo.findOneBy({email:adminEmail});
        managerLogInfo.adminID = admin.id;

        return this.managerrepo.save(managerLogInfo);
    }


    async getManagerByAdminId (adminEmail:string) {
        console.log(adminEmail);
        const admin = await this.adminRepo.findOneBy({email:adminEmail});
        const adminId = admin.id;

        return this.adminRepo.find(
            {
                where: {id:adminId},
                relations: {manager:true}
            }
        ) 
    }


    async regTraveler (travelerLogInfo:ManagerDto, adminEmail:string) : Promise<TravelerEntity> {
        const admin = await this.adminRepo.findOneBy({email:adminEmail});
        travelerLogInfo.adminID = admin.id;

        return this.travelerRepo.save(travelerLogInfo);
    }

    
    //all search by admin id
    async getTravelerByAdminId (adminEmail:string) {
        console.log(adminEmail);
        const admin = await this.adminRepo.findOneBy({email:adminEmail});
        const adminId = admin.id;

        return this.adminRepo.find(
            {
                where: {id:adminId},
                relations: {traveler:true}
            }
        ) 
    }

    async regTourGuid (tourGuidLogInfo:TourGuidDto, adminEmail:string) : Promise<TourGuidEntity> {
        const admin = await this.adminRepo.findOneBy({email:adminEmail});
        tourGuidLogInfo.adminID = admin.id;

        return this.turGuidRepo.save(tourGuidLogInfo);
    }


    async getTourGuidrByAdminId (adminEmail:string) {
        console.log(adminEmail);
        const admin = await this.adminRepo.findOneBy({email:adminEmail});
        const adminId = admin.id;

        return this.adminRepo.find(
            {
                where: {id:adminId},
                relations: {tourguid:true}
            }
        ) 
    }


    async updateAdminInfo (adminUpdateInfo:AdminDto, adminEmail:string) : Promise<AdminEntity> {
        const admin = await this.adminRepo.findOneBy({email:adminEmail});
        adminUpdateInfo.id = admin.id;

        const salt = await bcrypt.genSalt();
        adminUpdateInfo.password = await bcrypt.hash(adminUpdateInfo.password, salt);

        await this.adminRepo.update({id:admin.id}, adminUpdateInfo);
        console.log("update!");
        return this.adminRepo.findOneBy({id:admin.id});
    }

    async updateManagerInfo (managerUpdateInfo:ManagerDto, adminEmail:string) : Promise<ManagerEntity> {
        const admin = await this.adminRepo.findOneBy({email:adminEmail});
        managerUpdateInfo.adminID = admin.id;

        const salt = await bcrypt.genSalt();
        managerUpdateInfo.password = await bcrypt.hash(managerUpdateInfo.password, salt);

        await this.managerrepo.update({id:managerUpdateInfo.id}, managerUpdateInfo);
        console.log("update!");
        return this.managerrepo.findOneBy({id:managerUpdateInfo.id});
    }

    async updateTravelerInfo (travelerUpdateInfo:TravelerDto, adminEmail:string) : Promise<TravelerEntity> {
        const admin = await this.adminRepo.findOneBy({email:adminEmail});
        travelerUpdateInfo.adminID = admin.id;

        const salt = await bcrypt.genSalt();
        travelerUpdateInfo.password = await bcrypt.hash(travelerUpdateInfo.password, salt);

        await this.travelerRepo.update({id:travelerUpdateInfo.id}, travelerUpdateInfo);
        console.log("update!");
        return this.travelerRepo.findOneBy({id:travelerUpdateInfo.id});
    }



    //all delete service
    async deleteManager (managerId:number, useremail:string) {
        const manager = await this.managerrepo.findOneBy({id:managerId});
        const admin = await this.adminRepo.findOneBy({email:useremail});
        const adminId = admin.id;

        if (manager.adminID == adminId) {
            await this.managerrepo.delete(managerId);
            return "manager Deleted!";
        } else {
            return "Couldn't Delete!";
        }
    }

    async deleteTraveler (travelerId:number, useremail:string) {
        const traveler = await this.travelerRepo.findOneBy({id:travelerId});
        const admin = await this.adminRepo.findOneBy({email:useremail});
        const adminId = admin.id;

        if (traveler.adminID == adminId) {
            await this.travelerRepo.delete(travelerId);
            return "Traveller Deleted!";
        } else {
            return "Couldn't Delete!";
        }
    }

    async deleteTourGuid (tourguidId:number, useremail:string) {
        const tourguid = await this.turGuidRepo.findOneBy({id:tourguidId});
        const admin = await this.adminRepo.findOneBy({email:useremail});
        const adminId = admin.id;

        if (tourguid.adminID == adminId) {
            await this.turGuidRepo.delete(tourguidId);
            return "Tour Guid Deleted!";
        } else {
            return "Couldn't Delete!";
        }
    }


    async sendMailManager (messageData:AdminMessageDTO, adminEmail:string) {
        const admin = await this.adminRepo.findOneBy({email:adminEmail});
        const adminName = admin.lastname;

        await this.mailerService.sendMail(
            {
                to: "fk1946674@gmail.com",
                subject: "From Admin: " + adminName,
                text: messageData.message,
            }
        );
    }
    
   
}