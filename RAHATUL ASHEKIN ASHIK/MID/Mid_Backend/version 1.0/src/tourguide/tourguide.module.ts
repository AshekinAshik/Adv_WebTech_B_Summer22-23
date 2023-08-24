import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TourGuideEntity } from "./tourguide.entity";

@Module({
    imports:[TypeOrmModule.forFeature([TourGuideEntity])],
    controllers:[],
    providers:[]
})

export class TourGuideModule {}