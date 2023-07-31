import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManagerModule } from './manager/manager.module';
import { TourGuideModule } from './tourguide/tourguide.module';
import { TravelerModule } from './traveller/traveler.module';

@Module({
  imports: [ManagerModule, TourGuideModule, TravelerModule, TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '', //password that was used in PostgreSQL
      database: 'tour_management_db',
      autoLoadEntities: true,
      synchronize: true,
    }
  )],
  controllers: [],
  providers: [],
})

export class AppModule {}
