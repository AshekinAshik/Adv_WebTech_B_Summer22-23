import { Module } from '@nestjs/common';
import { TravellerController } from './Traveller/traveller.controller';
import { TravellerService } from './Traveller/traveller.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TravellerModule } from './Traveller/traveller.module';

@Module({
  imports: [TravellerModule, TypeOrmModule.forRoot(
    {
       type: 'postgres',
    host: 'localhost',
    port: 1998,
    username: 'postgres',
    password: 'Ashik-19980',
    database: 'traveller',//Change to your database name
    autoLoadEntities: true,
    synchronize: true,
    } ),],
  
})
export class AppModule {}

