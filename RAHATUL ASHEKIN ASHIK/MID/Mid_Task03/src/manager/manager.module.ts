import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TravelerEntity } from "src/traveler/traveler.entity";
import { ManagerController } from "./manager.controller";
import { ManagerEntity } from "./manager.entity";
import { ManagerService } from "./manager.service";

@Module({
    imports: [TypeOrmModule.forFeature([ManagerEntity, TravelerEntity])],
    controllers: [ManagerController],
    providers: [ManagerService]
})

export class ManagerModule {}