import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TravelerEntity } from "./traveler.entity";

@Module({
    imports: [TypeOrmModule.forFeature([TravelerEntity])],
    controllers: [],
    providers: []
})

export class TravelerModule {}