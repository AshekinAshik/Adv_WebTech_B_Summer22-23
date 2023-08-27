import { HttpException, HttpStatus, Injectable,NotFoundException } from "@nestjs/common";
import { Console } from "console";
import { TourGuideRegDTO, TourGuideLoginDTO, TourGuideUpdateDTO, PaymentReceiveDTO, CreateTourPackDTO, HotelandVehicleDTO, TourgudieMessageDTO } from "./tg.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PaymentEntity, TourGuideEntity, createTourPackEntity, createhotelandvehivleEntity } from "./tg.entity";
import * as bcrypt from 'bcrypt';
import { TravellerEntity } from "src/Traveller/traveller.entiry";
import { TravellerRegDTO } from "src/Traveller/traveller.dto";
import { ManagerEntity } from "src/Manager/manager.entiry";
import { ManagerRegDTO } from "src/Manager/manager.dto";
import { MailerService } from "@nestjs-modules/mailer/dist";
import { NOTFOUND } from "dns";

@Injectable()
export class TourGuideService{

    
    constructor(
        @InjectRepository(TourGuideEntity)
        private tourguideRepo: Repository <TourGuideEntity>,
        @InjectRepository(TravellerEntity)
        private travelerRepo: Repository<TravellerEntity>,
        @InjectRepository(PaymentEntity)
        private paymentRepo: Repository<PaymentEntity>,
        @InjectRepository(createTourPackEntity)
        private tourpackRepo: Repository<createTourPackEntity>,
        @InjectRepository(createhotelandvehivleEntity)
        private hotelandvehicleRepo: Repository<createhotelandvehivleEntity>,
        @InjectRepository(ManagerEntity)
        private managerRepo : Repository<ManagerEntity>,
        
        private readonly mailerService:MailerService

    ){ }
    
    
   async regTourGuide(tourguideRegInfo : TourGuideRegDTO): Promise<TourGuideEntity> {
        const salt = await bcrypt.genSalt();
        tourguideRegInfo.password = await bcrypt.hash(tourguideRegInfo.password,salt);
        return this.tourguideRepo.save(tourguideRegInfo);
    }
    
    async loginTourGuide (tourguideLoginInfo:TourGuideLoginDTO) {
        
        const data = await this.tourguideRepo.findOneBy({name:tourguideLoginInfo.name});
        
        const isMatch:boolean = await bcrypt.compare(tourguideLoginInfo.password, data.password);
         
        console.log(isMatch);
        return isMatch;
                
    
    }
    
    

    async updateTourGuide(name:string, tourgudieUpdateInfo:TourGuideUpdateDTO): Promise<TourGuideEntity> {
        //return "Tourguide updated successfully 😊";
        const data =await this.tourguideRepo.findOneBy({name:name})
        console.log(data);
        tourgudieUpdateInfo.id=data.id;

        const salt =await bcrypt.genSalt();
        tourgudieUpdateInfo.password =await bcrypt.hash(tourgudieUpdateInfo.password,salt);
        await this.tourguideRepo.update({id:data.id}, tourgudieUpdateInfo);
        console.log("data has been updated");
        return this.tourguideRepo.findOneBy({id :data.id});
    }


    async deleteTourGuide(tourguidename:string) {
        const data =await this.tourguideRepo.findOneBy({name:tourguidename});
        await this.tourguideRepo.delete(data.id);  

        // if(result.affected==0)
        // throw new NotFoundException(`Cannot find by ${data.id}`);
        
        }
    
    
    async addTraveller (travellerRegInfo:TravellerRegDTO, tourguidename:string) : Promise<TravellerEntity> {
            const tourguide = await this.tourguideRepo.findOneBy({name:tourguidename});
            //const traveller = await this.travellerRepo.findOneBy({username:travelerRegInfo.username});
    
            travellerRegInfo.tourguideID = tourguide.id;
    
            return this.travelerRepo.save(travellerRegInfo);
        }


    async getTourGuideinfoByname(tourguidename:string)//tourguideUsername
    {
        console.log(tourguidename);//tourgudieUsername
        const tourgudie = await this.tourguideRepo.findOneBy({name:tourguidename});//tourgudieUsername
        const tourguideId= tourgudie.id;

        return this.tourguideRepo.find(
            {
                where :{id:tourguideId},
                relations:{travellers:true}
            }
        )
    }

    async findOneByTravellerId(id: number): Promise<TravellerEntity> {
        return this.travelerRepo.findOneById(id);
    }
   
   
    async getTourGuideinfo() : Promise<TravellerEntity[]>{
        return this.travelerRepo.find({
            relations : ({tourguide:true})
        })
    }

    async getTraveller(tourgudiename: string): Promise<TravellerEntity[]>{
        const tourgudie = await this.tourguideRepo.findOneBy({name:tourgudiename});

        return this.travelerRepo.find(
            {
                where:{tourguideID:tourgudie.id},
                relations:{tourguide:true}
            }
        )
    }

    async getTravellerById(travellerId:number, tourgudiename:string){
        return this.tourguideRepo.findOneBy({id:travellerId});
    }

    async removeTraveller(travellerId:number,tourgudiename:string) {
        
        const traveller= await this.travelerRepo.findOneBy({id:travellerId});
        const tourgudie =await this.tourguideRepo.findOneBy({name:tourgudiename});
        const tourguideId=tourgudie.id;
        if(traveller.tourguideID== tourguideId){
            await this.travelerRepo.delete(travellerId);
            return "Successfully Deleted";
        }
        else{
            return " Delete Traveller Failed ";
        }
    //  catch(error)
    // {
    //     throw new NotFoundException("Traveller not found"); 
    // }
    }

    

    async receivePaymentByname(paymentreceiveInfo:PaymentReceiveDTO, tourgudiename:string) {
        const tourgudie = await this.tourguideRepo.findOneBy({name:tourgudiename});
        paymentreceiveInfo.tourguideID= tourgudie.id;
    
      return this.paymentRepo.save(paymentreceiveInfo);

    }

    async getallpayment(tourguidename: string): Promise<PaymentEntity[]>{
        const tourguide = await this.tourguideRepo.findOneBy({name:tourguidename});
        
        return this.paymentRepo.find(
            {
            where:{tourguideID:tourguide.id},
            relations:{tourguide:true}
            }
        );
    }

    async createtourpack(createtourpackInfo:CreateTourPackDTO, tourguidename:string): Promise<createTourPackEntity> {
       const tourgudie = await this.tourguideRepo.findOneBy({name:tourguidename});
       createtourpackInfo.tourguideID=tourgudie.id;
       console.log(createtourpackInfo.tourguideID);
        return this.tourpackRepo.save(createtourpackInfo);
    }

    async getalltourpack(tourguidename: string): Promise<createTourPackEntity[]>{
        const tourguide = await this.tourguideRepo.findOneBy({name:tourguidename});
        
        return this.tourpackRepo.find(
            {
            where:{tourguideID:tourguide.id},
            relations:{tourguide:true}
            }
        );
    }


    async getbookhotelandvehicle(hotalandvechicleInfo:HotelandVehicleDTO, tourguidename: string): Promise<createhotelandvehivleEntity> {
        const tourgudie = await this.tourguideRepo.findOneBy({name:tourguidename});
        hotalandvechicleInfo.tourguideID = tourgudie.id;
        console.log(hotalandvechicleInfo);
        
        return this.hotelandvehicleRepo.save(hotalandvechicleInfo);
    }

    async getallManagerInfo(viewallmanagerinfo:ManagerRegDTO): Promise<ManagerEntity[]>{
        return this.managerRepo.find();


    }

    async sendmailtotraveller(messageInfo: TourgudieMessageDTO, tourguidename: string) {
        const tourguide = await this.tourguideRepo.findOneBy({name:tourguidename});
        //const tourguideName= tourgudie.name;
        
        await this.mailerService.sendMail(
            {
                to:messageInfo.receiver, //"hasanmollah151@gmail.com"//messageInfo.receiver
                subject:"Tourgudie:"+ tourguide.name+":"+messageInfo.subject,
                text:messageInfo.message,
            }
        );
    }

    

}