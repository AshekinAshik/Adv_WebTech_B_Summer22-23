import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { TravelerRegDTO } from "src/traveler/traveler.dto";
import { ManagerRegDTO } from "./manager.dto";
import { ManagerService } from "./manager.service";

@Controller('manager')
export class ManagerController {
    constructor (private readonly managerService:ManagerService) {}

    @Post('reg')
    regManager (@Body() managerRegInfo:ManagerRegDTO) : any {
        return this.managerService.regManager(managerRegInfo);
    }

    //MANAGER can add TRAVELER using their ID
    @Post('reg/traveler')
    regTraveler (@Body() travelerRegInfo:TravelerRegDTO) : any {
        return this.managerService.regTraveler(travelerRegInfo);
    }

    //MANAGER can only search TRAVELER by their ID
    @Get('search/traveler/:managerId')
    getTravelerByManagerId (@Param("managerId", ParseIntPipe) managerId:number) : any {
        return this.managerService.getTravelerByManagerId(managerId);
    }

    
}