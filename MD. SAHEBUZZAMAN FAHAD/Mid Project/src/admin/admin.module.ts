import { TravelerEntity } from "src/traveler/traveler.entity";
import { AdminController } from "./admin.controler";
import { AdminEntity } from "./admin.entity";
import { AdminService } from "./admin.service";
import { ManagerEntity } from "src/manager/manager.entity";
import { TourGuidEntity } from "src/tourguid/tourguid.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MailerModule } from "@nestjs-modules/mailer";
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([AdminEntity, ManagerEntity, TravelerEntity, TourGuidEntity]),
    MailerModule.forRoot(
        {
            transport: {
                host: 'smtp.gmail.com',
                port: 465,
                ignoreTLS: true,
                secure: true,
                auth: {
                    user: 'fk1946674@gmail.com',
                    pass: 'kqmmiemjikwctans'
                }
            }
        })
    ],
    controllers: [AdminController],
    providers: [AdminService]
})
export class AdminModule { }