import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TravellerRegDTO } from "src/traveller/traveller.dto";
import { TravellerEntity } from "src/traveller/traveller.entity";
import { Repository } from "typeorm";
import { DeleteQry, HotelDetailsDTO, ManagerInfoDTO, ManagerLoginDTO, ManagerMessageDTO, ManagerRegDTO, ManagerUpdateDTO } from "./manager.dto";
import { HotelEntity, ManagerEntity } from "./manager.entity";
import * as bcrypt from 'bcrypt';
import { TourGuideRegDTO, TourGuideUpdateDTO } from "src/tourguide/tourguide.dto";
import { TourGuideEntity } from "src/tourguide/tourguide.entity";
import { MailerService } from "@nestjs-modules/mailer/dist";

@Injectable()
export class ManagerService {
    constructor (
        @InjectRepository(ManagerEntity)
            private managerRepo:Repository<ManagerEntity>,
        @InjectRepository(TravellerEntity)
            private travellerRepo:Repository<TravellerEntity>,
        @InjectRepository(TourGuideEntity)
            private tourguideRepo:Repository<TourGuideEntity>,
        @InjectRepository(HotelEntity)
            private hotelRepo:Repository<HotelEntity>,
        // @InjectRepository(ManagerInfoEntity)
        //     private managerInfoRepo:Repository<ManagerInfoEntity>
        private readonly mailerService:MailerService
    ) {}

    async regManager (managerRegInfo:ManagerRegDTO) : Promise<ManagerEntity> {
        const salt = await bcrypt.genSalt();
        managerRegInfo.password = await bcrypt.hash(managerRegInfo.password, salt);

        return this.managerRepo.save(managerRegInfo);


        //await this.addManagerInfo(managerRegInfo);

        //return "Manager Registered!";

        // const manager = await this.managerRepo.findOneBy({username:managerRegInfo.username});
        // var managerInfo:ManagerInfoDTO;
        // managerInfo.id = manager.id;
        // managerInfo.name = managerRegInfo.name;
        // managerInfo.email = managerRegInfo.email;
        // managerInfo.contact = managerRegInfo.contact;
        // await this.managerInfoRepo.save(managerInfo);

        // return managerRegInfo;
    }

    async loginManager (managerLoginInfo:ManagerLoginDTO) {
        const manager = await this.managerRepo.findOneBy({username:managerLoginInfo.username});
        
        const isMatch:boolean = await bcrypt.compare(managerLoginInfo.password, manager.password);
        console.log(isMatch);
        return isMatch;

        // if(manager) {
        //     const isMatch:boolean = await bcrypt.compare(managerLoginInfo.password, manager.password);
        //     if (isMatch) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
        // return false;
    }

    async uploadManager (fileName:string, username:string) {
        const manager = await this.managerRepo.findOneBy({username:username});
        console.log(username);
        if (manager) {
            manager.photoFileName = fileName;
            await this.managerRepo.save(manager);
            return "Manager Photo Uploaded!";
        }
        return "Manager Photo Couldn't be Uploaded!";
    }

    async regTraveller (travellerRegInfo:TravellerRegDTO, managerUsername:string) : Promise<TravellerEntity> {
        const manager = await this.managerRepo.findOneBy({username:managerUsername});
        //const traveller = await this.travellerRepo.findOneBy({username:travelerRegInfo.username});

        travellerRegInfo.managerID = manager.id;

        return this.travellerRepo.save(travellerRegInfo);
    }

    async getTravellerByManagerId (managerUsername:string) {
        console.log(managerUsername);
        const manager = await this.managerRepo.findOneBy({username:managerUsername});
        const managerId = manager.id;

        return this.managerRepo.find(
            {
                where: {id:managerId},
                relations: {travellers:true}
            }
        ) 
    }

    async updateManagerInfo (managerUpdateInfo:ManagerUpdateDTO, managerUsername:string) : Promise<ManagerEntity> {
        const manager = await this.managerRepo.findOneBy({username:managerUsername});
        managerUpdateInfo.id = manager.id;

        const salt = await bcrypt.genSalt();
        managerUpdateInfo.password = await bcrypt.hash(managerUpdateInfo.password, salt);

        await this.managerRepo.update({id:manager.id}, managerUpdateInfo);
        console.log("update!");
        return this.managerRepo.findOneBy({id:manager.id});
    }

    async removeManager (managerUsername:string) {
        const manager = await this.managerRepo.findOneBy({username:managerUsername});
        await this.managerRepo.delete(manager.id);
    }

    async removeTraveller (travellerId:number, managerUsername:string) {
        const traveller = await this.travellerRepo.findOneBy({id:travellerId});
        const manager = await this.managerRepo.findOneBy({username:managerUsername});
        const managerId = manager.id;

        if (traveller.managerID == managerId) {
            await this.travellerRepo.delete(travellerId);
            return "Traveller Deleted!";
        } else {
            return "Couldn't Delete!";
        }


        // const manager = await this.managerRepo.findOneBy({username:managerUsername});
        // const managerId = manager.id;
        
        // const travellers = await this.managerRepo.find(
        //     {
        //         where: {id:managerId},
        //         relations: {travellers:true}
        //     }
        // );

        // //const traveler = await this.travellerRepo.findOneBy({id:travelerId});

        // if ( !== managerId) {
        //     throw new NotFoundException('this manager is not associated with the traveler!');
        // } else {
        //     await this.travellerRepo.delete(travelerId);
        // }
    }

    async regTourGuide (tourguideRegInfo:TourGuideRegDTO, managerUsername:string) {
        const manager = await this.managerRepo.findOneBy({username:managerUsername});

        const salt = await bcrypt.genSalt();
        tourguideRegInfo.password = await bcrypt.hash(tourguideRegInfo.password, salt);

        const newTourGuide = await this.tourguideRepo.save(tourguideRegInfo);
        newTourGuide.managers = [manager];

        return this.tourguideRepo.save(newTourGuide);


        // const salt = await bcrypt.genSalt();
        // tourguideRegInfo.password = await bcrypt.hash(tourguideRegInfo.password, salt);

        // const manager = await this.managerRepo.findOneBy({username:managerUsername});
        // const managerId = manager.id;

        // await this.tourguideRepo.save(tourguideRegInfo);

        // const tourguide = await this.tourguideRepo.findOneBy({username:tourguideRegInfo.username});
        // const tourguideId = tourguide.id;
    }

    async addManagerToTourGuide (managerId:number, tourguideId:number) {
        const tourGuide = await this.tourguideRepo.findOneBy({id:tourguideId});
        const manager = await this.managerRepo.findOneBy({id:managerId});

        if (manager && tourGuide) {
            manager.tourguides = [...manager.tourguides, tourGuide];
            await this.managerRepo.save(manager);
        }
    }

    async sendMailToTraveller (messageInfo:ManagerMessageDTO, managerUsername:string) {
        const manager = await this.managerRepo.findOneBy({username:managerUsername});
        const managerName = manager.name;

        await this.mailerService.sendMail(
            {
                to: "krazzypagla@gmail.com",
                subject: "From Manager: " + managerName,
                text: messageInfo.message,
            }
        );
    }

    async getTourGuidesByManager (managerUsername:string) {
        const manager = await this.managerRepo.findOneBy({username:managerUsername});
        const managerId = manager.id;
        
        return this.managerRepo.find(
            {
                where:  {id:managerId},
                relations:['tourguides']
            }
        );
    }

    async updateTourGuideByManager (tourGuideId:number, tourGuideUpdateInfo:TourGuideUpdateDTO, managerUsername:string) {
        const manager = await this.managerRepo.findOneBy({username:managerUsername});
        const managerId = manager.id;

        

        tourGuideUpdateInfo.id = tourGuideId;
        //await this.tourguideRepo.update(tourGuideId, tourGuideUpdateInfo);
        const tourGuide = manager.tourguides.find((guide) => guide.id === tourGuideId);

        // console.log(tourGuide);
        // tourGuide.name = tourGuideUpdateInfo.name;
        // tourGuide.email = tourGuideUpdateInfo.email;
        // tourGuide.contact = tourGuideUpdateInfo.contact;
        // tourGuide.age = tourGuideUpdateInfo.age;
        // tourGuide.location = tourGuideUpdateInfo.location;

        // await this.tourguideRepo.save(tourGuide);

        return "updated";
    }

    async addHotel (hotelDetails:HotelDetailsDTO, managerUsername:string) {
        const manager = await this.managerRepo.findOneBy({username:managerUsername});
        hotelDetails.managerId = manager.id;
        return this.hotelRepo.save(hotelDetails);
    }

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