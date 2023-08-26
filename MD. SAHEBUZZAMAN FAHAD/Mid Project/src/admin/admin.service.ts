import { TravelerDto } from "src/traveler/traveler.dto";
import { AdminDto, AdminLoginDto, AdminMessageDTO } from "./admin.dto";
import { TravelerEntity } from "src/traveler/traveler.entity";
import { ManagerDto } from "src/manager/manager.dto";
import { ManagerEntity } from "src/manager/manager.entity";
import { AdminEntity } from "./admin.entity";
import { TourGuidDto } from "src/tourguid/tourguid.dto";
import { TourGuidEntity } from "src/tourguid/tourguid.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';


@Injectable()
export class AdminService {


    constructor(
        private readonly mailerService: MailerService,
        @InjectRepository(AdminEntity)
        private adminRepo: Repository<AdminEntity>,

        @InjectRepository(ManagerEntity)
        private managerrepo: Repository<ManagerEntity>,

        @InjectRepository(TravelerEntity)
        private travelerRepo: Repository<TravelerEntity>,

        @InjectRepository(TourGuidEntity)
        private turGuidRepo: Repository<TourGuidEntity>,
    ) { }


    async adminReg(aminRegInfo: AdminDto): Promise<AdminEntity> {
        const salt = await bcrypt.genSalt();
        aminRegInfo.password = await bcrypt.hash(aminRegInfo.password, salt);

        return this.adminRepo.save(aminRegInfo);
    }

    // async paymenH (paymentInfo:PaymentEntity) : Promise<PaymentEntity> {

    //     return this.adminRepo.save(paymentInfo);
    // }


    async loginAdmin(adminLogininfo: AdminLoginDto) {
        const admin = await this.adminRepo.findOneBy({ email: adminLogininfo.email });
        console.log(admin);
        const isMatch: boolean = await bcrypt.compare(adminLogininfo.password, admin.password);
        console.log(isMatch);
        return isMatch;

    }


    // async uploadAdmin (fileName:string, email:string) {
    //     const admin = await this.adminRepo.findOneBy({email:email});

    //     if (admin) {
    //         admin.filename = fileName;
    //         await this.adminRepo.save(admin);
    //         return "Admin Photo Uploaded!";
    //     }
    //     return "Admin Photo Couldn't be Uploaded!";
    // }



    async findOneByIdm(id: number): Promise<ManagerEntity> {
        return this.managerrepo.findOneById(id);
    }

    async findOneByIdTraveller(id: number): Promise<TravelerEntity> {
        return this.travelerRepo.findOneById(id);
    }

    async findOneByIdTourguid(id: number): Promise<TourGuidEntity> {
        return this.turGuidRepo.findOneById(id);
    }

    async regManager(managerLogInfo: ManagerDto, adminEmail: string): Promise<ManagerEntity> {
        const admin = await this.adminRepo.findOneBy({ email: adminEmail });
        managerLogInfo.adminID = admin.id;

        return this.managerrepo.save(managerLogInfo);
    }


    async getManagerByAdminId(adminEmail: string) {
        console.log(adminEmail);
        const admin = await this.adminRepo.findOneBy({ email: adminEmail });
        //return admin;
        const adminId = admin.id;

        return this.adminRepo.find(
            {
                where: { id: adminId },
                relations: { manager: true }
            }
        )
    }


    //this code only show frontend manager all data and admin info
    async getManagerAll(): Promise<ManagerEntity[]> {
        return this.managerrepo.find(
            { relations: { admin: true } }
        );
    }


    async getAllTraveller(): Promise<TravelerEntity[]> {
        return this.travelerRepo.find(
            { relations: { admin: true } }
        );
    }

    async getTourguidAll(): Promise<TourGuidEntity[]> {
        return this.turGuidRepo.find(
            { relations: { admin: true } }
        );
    }


    async regTraveler(travelerLogInfo: ManagerDto, adminEmail: string): Promise<TravelerEntity> {
        const admin = await this.adminRepo.findOneBy({ email: adminEmail });
        travelerLogInfo.adminID = admin.id;

        return this.travelerRepo.save(travelerLogInfo);
    }


    //all search by admin id
    async getTravelerByAdminId(adminEmail: string) {
        console.log(adminEmail);
        const admin = await this.adminRepo.findOneBy({ email: adminEmail });
        const adminId = admin.id;

        return this.adminRepo.find(
            {
                where: { id: adminId },
                relations: { traveler: true }
            }
        )
    }

    async regTourGuid(tourGuidLogInfo: TourGuidDto, adminEmail: string): Promise<TourGuidEntity> {
        const admin = await this.adminRepo.findOneBy({ email: adminEmail });
        tourGuidLogInfo.adminID = admin.id;

        return this.turGuidRepo.save(tourGuidLogInfo);
    }


    async getTourGuidrByAdminId(adminEmail: string) {
        console.log(adminEmail);
        const admin = await this.adminRepo.findOneBy({ email: adminEmail });
        const adminId = admin.id;

        return this.adminRepo.find(
            {
                where: { id: adminId },
                relations: { tourguid: true }
            }
        )
    }


    async updateAdminInfo(adminUpdateInfo: AdminDto, adminEmail: string): Promise<AdminEntity> {
        const admin = await this.adminRepo.findOneBy({ email: adminEmail });
        adminUpdateInfo.id = admin.id;

        // admin.email = adminUpdateInfo.email;
        const salt = await bcrypt.genSalt();
        adminUpdateInfo.password = await bcrypt.hash(adminUpdateInfo.password, salt);

        await this.adminRepo.update({ id: admin.id }, adminUpdateInfo);
        console.log("update!");
        return this.adminRepo.findOneBy({ id: admin.id });
    }

    async updateManagerInfo(managerUpdateInfo: ManagerDto, adminEmail: string): Promise<ManagerEntity> {
        const admin = await this.adminRepo.findOneBy({ email: adminEmail });
        managerUpdateInfo.adminID = admin.id;

        const salt = await bcrypt.genSalt();
        managerUpdateInfo.password = await bcrypt.hash(managerUpdateInfo.password, salt);

        await this.managerrepo.update({ id: managerUpdateInfo.id }, managerUpdateInfo);
        console.log("update!");
        return this.managerrepo.findOneBy({ id: managerUpdateInfo.id });
    }

    async updateTravelerInfo(travelerUpdateInfo: TravelerDto, adminEmail: string): Promise<TravelerEntity> {
        const admin = await this.adminRepo.findOneBy({ email: adminEmail });
        travelerUpdateInfo.adminID = admin.id;

        const salt = await bcrypt.genSalt();
        travelerUpdateInfo.password = await bcrypt.hash(travelerUpdateInfo.password, salt);

        await this.travelerRepo.update({ id: travelerUpdateInfo.id }, travelerUpdateInfo);
        console.log("update!");
        return this.travelerRepo.findOneBy({ id: travelerUpdateInfo.id });
    }


    async updateTourguidInfo(tourguidUpdateInfo: TourGuidDto, adminEmail: string): Promise<TourGuidEntity> {
        const admin = await this.adminRepo.findOneBy({ email: adminEmail });
        tourguidUpdateInfo.adminID = admin.id;

        const salt = await bcrypt.genSalt();
        tourguidUpdateInfo.password = await bcrypt.hash(tourguidUpdateInfo.password, salt);

        await this.turGuidRepo.update({ id: tourguidUpdateInfo.id }, tourguidUpdateInfo);
        console.log("update!");
        return this.turGuidRepo.findOneBy({ id: tourguidUpdateInfo.id });
    }



    //all delete service
    async deleteManager(managerId: number, useremail: string) {
        const manager = await this.managerrepo.findOneBy({ id: managerId })

        // return manager;
        const admin = await this.adminRepo.findOneBy({ email: useremail });

        const adminId = admin.id;
        console.log(adminId)
        if (manager.adminID == adminId) {
            await this.managerrepo.delete(managerId);
            return "manager Deleted!";
        } else {
            return adminId;

        }
    }

    // async deleteManagerone (id) : Promise<ManagerEntity> {
    //     return await this.managerrepo.findOneBy({id});
    // }

    async deleteTraveler(travelerId: number, useremail: string) {
        const traveler = await this.travelerRepo.findOneBy({ id: travelerId });
        const admin = await this.adminRepo.findOneBy({ email: useremail });
        const adminId = admin.id;

        if (traveler.adminID == adminId) {
            await this.travelerRepo.delete(travelerId);
            return "Traveller Deleted!";
        } else {
            return "Couldn't Delete!";
        }
    }

    async deleteTourGuid(tourguidId: number, useremail: string) {
        const tourguid = await this.turGuidRepo.findOneBy({ id: tourguidId });
        const admin = await this.adminRepo.findOneBy({ email: useremail });
        const adminId = admin.id;

        if (tourguid.adminID == adminId) {
            await this.turGuidRepo.delete(tourguidId);
            return "Tour Guid Deleted!";
        } else {
            return "Couldn't Delete!";
        }
    }


    async sendMailManager(messageData: AdminMessageDTO, adminEmail: string) {
        const admin = await this.adminRepo.findOneBy({ email: adminEmail });
        const adminName = admin.lastname;


        await this.mailerService.sendMail(
            {
                to: messageData.receiver,
                subject: "From Admin: " + adminName + " : " + messageData.subject,
                text: messageData.message,
            }
        );
    }
    
}