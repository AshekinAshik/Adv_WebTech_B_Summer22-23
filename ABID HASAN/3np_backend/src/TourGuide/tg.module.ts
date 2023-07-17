import { Module } from "@nestjs/common";
import {TourGuideController} from "./tg.controller";
import {TourGuideService} from "./tg.service";

@Module({
    imports:[],
    controllers: [TourGuideController],
    providers: [TourGuideService], 


})
export class TourGuideModule {}