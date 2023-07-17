import { Controller, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ManagerEntity } from "./manager.entiry";
import { ManagerController } from "./manager.controller";
import { ManagerService } from "./manager.service";
import { TourGuideEntity } from "src/TourGuide/tg.entity";



@Module({
    imports:[TypeOrmModule.forFeature([ManagerEntity,TourGuideEntity])],

    controllers:[ManagerController],
    providers:[ManagerService]
})

export class ManagerModule{}