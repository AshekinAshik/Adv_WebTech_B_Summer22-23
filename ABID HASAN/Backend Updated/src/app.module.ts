import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TourGuideController } from './TourGuide/tg.controller';
import { TourGuideService } from './TourGuide/tg.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TourGuideModule } from './TourGuide/tg.module';
import { TravellerModule } from './Traveller/traveller.module';
import { ManagerModule } from './Manager/manager.module';


@Module({
  imports: [TourGuideModule,TravellerModule,ManagerModule,TypeOrmModule.forRoot(
    { type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'Tourguide',//Change to your database name
    autoLoadEntities: true,
    synchronize: true,
    } ),
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
