import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManagerModule } from './manager/manager.module';
import { TravelerModule } from './traveller/traveler.module';

@Module({
  imports: [ManagerModule, TravelerModule, TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '@Shek1n.@Sh1k.postgreSQL',
      database: 'tour_management_db',
      autoLoadEntities: true,
      synchronize: true,
    }
  )],
  controllers: [],
  providers: [],
})

export class AppModule {}
