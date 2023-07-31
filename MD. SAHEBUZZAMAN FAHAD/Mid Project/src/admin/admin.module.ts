import { Module } from "@nestjs/common";
import { AdminController } from "./admin.controler";
import { AdminService } from "./admin.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminEntity } from "./admin.entity";
import { ManagerEntity } from "src/manager/manager.entity";
import { TravelerEntity } from "src/traveler/traveler.entity";
import { TourGuidEntity } from "src/tourguid/tourguid.entity";
import { MailerModule } from "@nestjs-modules/mailer";
//import { PaymentEntity } from "src/payment.ts/payment.entity";

@Module({
    imports: [TypeOrmModule.forFeature([AdminEntity,ManagerEntity,TravelerEntity,TourGuidEntity]),
    MailerModule.forRoot(
      {
          transport: {
              host: 'smtp.gmail.com',
              port: 465,
              ignoreTLS: true,
              secure: true,
              auth: {
                  user: 'fk1946674@gmail.com',
                  pass: 'zknwalzanfrnejgi'
              }
          }
      })
    ],
    controllers: [AdminController],
    providers: [AdminService]
  })
  export class AdminModule {}