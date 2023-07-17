import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TravellerEntity } from "./traveller.entiry";


@Module({

    imports: [TypeOrmModule.forFeature([TravellerEntity])],
    controllers:[],
    providers:[]


})

export class TravellerModule{}


