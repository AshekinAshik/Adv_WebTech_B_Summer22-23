import { Module } from "@nestjs/common";
import { TravellerController } from "./Traveller.controller";
import { TravellerService } from "./traveller.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TravellerEntity } from "./traveller.entity";
import { TourguidEntity } from "src/Tourguid/tourguid.entity";
import { MailerModule } from "@nestjs-modules/mailer";






@Module({
    imports: [TypeOrmModule.forFeature([TravellerEntity,TourguidEntity]), 
    MailerModule.forRoot(
      {
          transport: {
              host: 'smtp.gmail.com',
              port: 465,
              ignoreTLS: true,
              secure: true,
              auth: {
                  user: 'ashiksarkar.bd@gmail.com',
                  pass: 'tdlqqhyrtlbtvrzu'
              }
          }
      }
  )],

    controllers: [TravellerController],
    providers: [TravellerService]
  })
  export class TravellerModule {}
