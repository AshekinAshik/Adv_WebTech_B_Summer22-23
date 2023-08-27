import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {TourGuideController} from "./tg.controller";
import {TourGuideService} from "./tg.service";
import { PaymentEntity, TourGuideEntity, createTourPackEntity, createhotelandvehivleEntity } from "./tg.entity";
import { TravellerEntity } from "src/Traveller/traveller.entiry";
import { ManagerEntity } from "src/Manager/manager.entiry";
import { MailerModule } from "@nestjs-modules/mailer";

@Module({
    imports:[TypeOrmModule.forFeature([TourGuideEntity,TravellerEntity,PaymentEntity,createTourPackEntity,createhotelandvehivleEntity,ManagerEntity]), MailerModule.forRoot(
        {
        transport:{
            host:'smtp.gmail.com',
            port:465,
            ignoreTLS:true,
            secure:true,
            auth:{
                user:'abidhasanahm151@gmail.com',
                pass:'qqocacmfpldjewan'// password that was generaed by app from Gmail
            }
        }
    }

    )],
    controllers: [TourGuideController],
    providers: [TourGuideService], 


})
export class TourGuideModule {}