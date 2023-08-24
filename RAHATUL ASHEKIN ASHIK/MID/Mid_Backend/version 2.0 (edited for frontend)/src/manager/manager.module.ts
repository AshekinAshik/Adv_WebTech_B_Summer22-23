import { MailerModule } from "@nestjs-modules/mailer";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TourGuideEntity } from "src/tourguide/tourguide.entity";
import { TravellerEntity } from "src/traveller/traveller.entity";
import { ManagerController } from "./manager.controller";
import { HotelEntity, ManagerEntity } from "./manager.entity";
import { ManagerService } from "./manager.service";

@Module({
    imports: [TypeOrmModule.forFeature([ManagerEntity, TravellerEntity, TourGuideEntity, HotelEntity]), MailerModule.forRoot(
        {
            transport: {
                host: 'smtp.gmail.com',
                port: 465,
                ignoreTLS: true,
                secure: true,
                auth: {
                    user: 'ashekin.ashik@gmail.com',
                    pass: 'xjvehcisconmojej'
                }
            }
        }
    )],
    controllers: [ManagerController],
    providers: [ManagerService]
})

export class ManagerModule {}