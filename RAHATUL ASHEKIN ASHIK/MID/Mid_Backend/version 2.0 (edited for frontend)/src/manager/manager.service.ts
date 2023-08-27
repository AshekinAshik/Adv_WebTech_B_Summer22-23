import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TravellerRegDTO, TravellerTourGuideDTO, TravellerUpdateDTO } from "src/traveller/traveller.dto";
import { TravellerEntity } from "src/traveller/traveller.entity";
import { Repository } from "typeorm";
import { DeleteQry, HotelDetailsDTO, ManagerFileDTO, ManagerInfoDTO, ManagerLoginDTO, ManagerMessageDTO, ManagerRegDTO, ManagerUpdateDTO } from "./manager.dto";
import { HotelEntity, ManagerEntity } from "./manager.entity";
import * as bcrypt from 'bcrypt';
import { TourGuideRegDTO, TourGuideUpdateDTO } from "src/tourguide/tourguide.dto";
import { TourGuideEntity } from "src/tourguide/tourguide.entity";
import { MailerService } from "@nestjs-modules/mailer/dist";

@Injectable()
export class ManagerService {
    constructor(
        @InjectRepository(ManagerEntity)
        private managerRepo: Repository<ManagerEntity>,
        @InjectRepository(TravellerEntity)
        private travellerRepo: Repository<TravellerEntity>,
        @InjectRepository(TourGuideEntity)
        private tourguideRepo: Repository<TourGuideEntity>,
        @InjectRepository(HotelEntity)
        private hotelRepo: Repository<HotelEntity>,
        // @InjectRepository(ManagerInfoEntity)
        //     private managerInfoRepo:Repository<ManagerInfoEntity>
        private readonly mailerService: MailerService
    ) { }

    async regManager(managerRegInfo: ManagerRegDTO): Promise<ManagerEntity> {
        const salt = await bcrypt.genSalt();
        managerRegInfo.password = await bcrypt.hash(managerRegInfo.password, salt);

        return this.managerRepo.save(managerRegInfo);
    }

    async loginManager(managerLoginInfo: ManagerLoginDTO) {
        const manager = await this.managerRepo.findOneBy({ username: managerLoginInfo.username });
        if (manager != null) {
            const isMatch: boolean = await bcrypt.compare(managerLoginInfo.password, manager.password);
            console.log(isMatch);
            return isMatch;
        } else {
            return false;
        }
    }

    async uploadManager(fileName: string, managerUsername: string) {
        const manager = await this.managerRepo.findOneBy({ username: managerUsername });
        console.log(managerUsername);
        if (manager) {
            manager.photoFileName = fileName;
            await this.managerRepo.save(manager);
            console.log("uploaded");
            return "Manager Photo Uploaded!";
        }
        return "Manager Photo Couldn't be Uploaded!";
    }

    async getFileByManager(managerFileInfo:number)  {
        const manager = await this.managerRepo.findOneBy({id: managerFileInfo});
        console.log(manager.id);
        return manager.photoFileName;
    }

    async updateManagerInfo(managerUpdateInfo: ManagerUpdateDTO, managerUsername: string): Promise<ManagerEntity> {
        const manager = await this.managerRepo.findOneBy({ username: managerUsername });
        managerUpdateInfo.id = manager.id;

        const salt = await bcrypt.genSalt();
        managerUpdateInfo.password = await bcrypt.hash(managerUpdateInfo.password, salt);

        await this.managerRepo.update({ id: manager.id }, managerUpdateInfo);
        console.log("update!");
        return this.managerRepo.findOneBy({ id: manager.id });
    }

    async viewManagerProfile(managerUsername:string) {
        const manager = await this.managerRepo.findOneBy({username: managerUsername});

        return manager;
    }

    async regTraveller(travellerRegInfo: TravellerRegDTO, managerUsername: string): Promise<TravellerEntity> {
        const manager = await this.managerRepo.findOneBy({ username: managerUsername });
        //const traveller = await this.travellerRepo.findOneBy({username:travelerRegInfo.username});

        travellerRegInfo.managerID = manager.id;

        return this.travellerRepo.save(travellerRegInfo);
    }

    // async getTraveller (managerUsername:string) {
    //     const manager = await this.managerRepo.findOneBy({username:managerUsername});

    //     return this.managerRepo.find(
    //         {
    //             where: {id:manager.id},
    //             relations: {travellers:true}
    //         }
    //     ) 
    // }

    //edited for frontend
    async getTraveller(managerUsername: string): Promise<TravellerEntity[]> {
        // async getTraveller(): Promise<TravellerEntity[]> {
        const manager = await this.managerRepo.findOneBy({ username: managerUsername });

        return this.travellerRepo.find(
            {
                where: { managerID: manager.id },
                relations: { manager: true }
            }
        );
    }

    async getTravellerById(travellerId: number, managerUsername: string) {
        //const manager = await this.managerRepo.findOneBy({username:managerUsername});

        return this.travellerRepo.findOneBy({ id: travellerId });

        // if(traveller.managerID == manager.id) {
        //     return traveller;
        // } else {
        //     return "Traveller Not Found under this Manager!";
        // }
    }

    // async removeManager (managerUsername:string) {
    //     const manager = await this.managerRepo.findOneBy({username:managerUsername});
    //     await this.managerRepo.delete(manager.id);
    // }

    async updateTraveller(travellerId: number, travellerUpdateInfo: TravellerUpdateDTO, managerUsername: string) {
        const manager = await this.managerRepo.findOneBy({ username: managerUsername });
        const traveller = await this.travellerRepo.findOneBy({ id: travellerId });

        if (traveller.managerID == manager.id) {
            await this.travellerRepo.update({ id: traveller.id }, travellerUpdateInfo);
        }
    }

    async removeTraveller(travellerId: number, managerUsername: string) {
        const traveller = await this.travellerRepo.findOneBy({ id: travellerId });
        const manager = await this.managerRepo.findOneBy({ username: managerUsername });

        //this is when session is done
        // if (traveller.managerID == manager.id) {
        // await this.travellerRepo.delete(travellerId);
        // return "Traveller Deleted!";
        // } else {
        // return "Couldn't Delete!";
        // }

        if (traveller.id == travellerId) {
            await this.travellerRepo.delete(travellerId);
            return "Traveller Delete Successful";
        } else {
            return "Traveller Delete Failed!";
        }
    }
    
    //not completed
    // async removeTourGuide(tourguideId: number, managerUsername: string) {
    //     const tourguide = await this.tourguideRepo.findOneBy({ id: tourguideId });
    //     const manager = await this.managerRepo.findOneBy({ username: managerUsername });

    //     if (tourguide.id == tourguideId) {
    //         await this.tourguideRepo.delete(tourguideId);
    //         return "Tour Guide Delete Successful";
    //     } else {
    //         return "Tour Guide Delete Failed!";
    //     }
    // }

    async regTourGuide(tourguideRegInfo: TourGuideRegDTO, managerUsername: string) {
        const manager = await this.managerRepo.findOneBy({ username: managerUsername });

        const newTourGuide = await this.tourguideRepo.save(tourguideRegInfo);
        newTourGuide.managers = [manager];

        return this.tourguideRepo.save(newTourGuide);
    }

    async sendMailToTraveller(messageInfo: ManagerMessageDTO, managerUsername: string) {
        const manager = await this.managerRepo.findOneBy({ username: managerUsername });

        await this.mailerService.sendMail(
            {
                to: messageInfo.receiver,
                subject: "Tour Manager " + manager.name + " : " + messageInfo.subject,
                text: messageInfo.message,
            }
        );
    }

    async getTourGuidesByManager(managerUsername: string) {
        const manager = await this.managerRepo.findOneBy({ username: managerUsername });
        const managerId = manager.id;

        // return this.managerRepo.find(
        //     {
        //         where:  {id:manager.id},
        //         relations:['tourguides']
        //     }
        // );

        //updated for frontend
        const tourGuides = await this.tourguideRepo
            .createQueryBuilder('tourguide')
            .innerJoin('tourguide.managers', 'manager')
            .where('manager.id = :managerId', { managerId })
            .getMany();

        return tourGuides;
    }

    async addTourGuideToTraveller(managerUsername: string, travellerAndTourGuide: TravellerTourGuideDTO) {
        const manager = await this.managerRepo.findOneBy({ username: managerUsername });

        const traveller = await this.travellerRepo.findOneBy({ id: travellerAndTourGuide.id });

        if (traveller.managerID == manager.id) {
            await this.travellerRepo.update({ id: travellerAndTourGuide.id }, travellerAndTourGuide);
        }
    }

    async addHotel(hotelDetails: HotelDetailsDTO, managerUsername: string) {
        const manager = await this.managerRepo.findOneBy({ username: managerUsername });
        hotelDetails.managerId = manager.id;
        return this.hotelRepo.save(hotelDetails);
    }


    // async updateTourGuideByManager (tourGuideId:number, tourGuideUpdateInfo:TourGuideUpdateDTO, managerUsername:string) {
    //     const manager = await this.managerRepo.findOneBy({username:managerUsername});
    //     const managerId = manager.id;
    //     const tg = manager.tourguides;
    //     console.log(tg);
    //     tourGuideUpdateInfo.id = tourGuideId;
    //     //await this.tourguideRepo.update(tourGuideId, tourGuideUpdateInfo);
    //     const tourGuide = manager.tourguides.find((guide) => guide.id === tourGuideId);

    //     // console.log(tourGuide);
    //     // tourGuide.name = tourGuideUpdateInfo.name;
    //     // tourGuide.email = tourGuideUpdateInfo.email;
    //     // tourGuide.contact = tourGuideUpdateInfo.contact;
    //     // tourGuide.age = tourGuideUpdateInfo.age;
    //     // tourGuide.location = tourGuideUpdateInfo.location;

    //     // await this.tourguideRepo.save(tourGuide);

    //     return "updated";
    // }

    // async addManagerInfo (managerRegInfo:ManagerRegDTO) {
    //     //var managerInfo:ManagerInfoDTO = null;
    //     const managerInformation = new ManagerInfoEntity;
    //     const manager = await this.managerRepo.findOneBy({username:managerRegInfo.username});
    //     const managerId = manager.id;

    //     managerInformation.id = managerId;
    //     managerInformation.name = managerRegInfo.name;
    //     managerInformation.email = managerRegInfo.email;
    //     managerInformation.contact = managerRegInfo.contact;
    //     return this.managerInfoRepo.save(managerInformation);
    // }

    // async updateTraveler (managerId:number, travelerId:number) : Promise<TravelerEntity> {
    //     const traveler = await this.travelerRepo.findOneBy({id:travelerId});

    //     if (traveler.manager.id !== managerId) {
    //         throw new NotFoundException("this manager is not associated with the traveler!")
    //     } else {
    //         await this.travelerRepo.update(travelerId, )
    //     }
    // }

    // async removeTraveler (managerData:ManagerEntity, travelerId:number) : Promise<void> {
    //     const traveler = await this.travelerRepo.findOneBy({id:travelerId})
    //     if (traveler.manager.id !== managerData.id) {
    //         throw new NotFoundException('this manager is not associated with the traveler!');
    //     } else {
    //         await this.travelerRepo.delete(travelerId);
    //     }
    // }

    // getTravelerByManagerId (managerId:number) : Promise<ManagerEntity[]> {
    //     return this.managerRepo.find(
    //         {
    //             where: {id:managerId},
    //             relations: {travellers:true}
    //         }
    //     )
    // }
}