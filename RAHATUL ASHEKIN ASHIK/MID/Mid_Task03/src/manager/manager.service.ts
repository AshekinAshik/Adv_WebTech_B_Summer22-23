import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TravelerRegDTO } from "src/traveler/traveler.dto";
import { TravelerEntity } from "src/traveler/traveler.entity";
import { Repository } from "typeorm";
import { ManagerRegDTO } from "./manager.dto";
import { ManagerEntity } from "./manager.entity";

@Injectable()
export class ManagerService {
    constructor (
        @InjectRepository(ManagerEntity)
            private managerRepo:Repository<ManagerEntity>,
        @InjectRepository(TravelerEntity)
            private travelerRepo:Repository<TravelerEntity>
    ) {}

    async regManager (managerRegInfo:ManagerRegDTO) : Promise<ManagerEntity> {
        return this.managerRepo.save(managerRegInfo);
    }

    async regTraveler (travelerRegInfo:TravelerRegDTO) : Promise<TravelerEntity> {
        return this.travelerRepo.save(travelerRegInfo);
    }

    getTravelerByManagerId (managerId:number) : Promise<ManagerEntity[]> {
        return this.managerRepo.find(
            {
                where: {id:managerId},
                relations: {travelers:true}
            }
        )
    }
}