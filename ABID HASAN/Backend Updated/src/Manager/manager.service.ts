import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";


import * as bcrypt from 'bcrypt';
import { Repository } from "typeorm";
import { ManagerEntity } from "./manager.entiry";
import { ManagerRegDTO } from "./manager.dto";
import {  TourGuideRegDTO } from "src/TourGuide/tg.dto";
import { TourGuideEntity } from "src/TourGuide/tg.entity";


@Injectable()
export class ManagerService {
    constructor (
        @InjectRepository(ManagerEntity)
            private managerRepo: Repository<ManagerEntity>,
        @InjectRepository(TourGuideEntity)
        private tourguideRepo: Repository<TourGuideEntity>
        
        
    ){}

    async regManager (managerRegInfo:ManagerRegDTO) : Promise<ManagerEntity> {
        const salt = await bcrypt.genSalt();
        managerRegInfo.password = await bcrypt.hash(managerRegInfo.password, salt);

        return this.managerRepo.save(managerRegInfo);
    }

    async regTourGuide (tourguideRegInfo:TourGuideRegDTO, managerUsername:string) {
        const manager = await this.managerRepo.findOneBy({username:managerUsername});

        const newTourGuide = await this.tourguideRepo.save(tourguideRegInfo);
        newTourGuide.managers = [manager];

        return this.tourguideRepo.save(newTourGuide);
}
}