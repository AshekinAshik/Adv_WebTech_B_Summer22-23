import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TravellerEntity } from "src/traveller/traveller.entity";
import { ManagerController } from "./manager.controller";
import { ManagerEntity } from "./manager.entity";
import { ManagerService } from "./manager.service";

@Module({
    imports: [TypeOrmModule.forFeature([ManagerEntity, TravellerEntity])],
    controllers: [ManagerController],
    providers: [ManagerService]
})

export class ManagerModule {}