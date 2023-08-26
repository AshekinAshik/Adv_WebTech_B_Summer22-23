import { Body, Controller, Post, Session, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { ManagerService } from "./manager.service";
import { ManagerRegDTO } from "./manager.dto";
import {  TourGuideRegDTO } from "src/TourGuide/tg.dto";
import { SessionGuard } from "src/TourGuide/session.gaurd";



@Controller('manager')
export class ManagerController {
    constructor (private readonly managerService:ManagerService) {}

    @Post('register')
    @UsePipes(new ValidationPipe())
    regManager (@Body() managerRegInfo:ManagerRegDTO) : any {
        console.log(managerRegInfo);
        return this.managerService.regManager(managerRegInfo);
    }

    @Post('register/tourguide')
    @UsePipes(new ValidationPipe())
   // @UseGuards(SessionGuard)
    regTourGuide(@Body() tourguideRegInfo:TourGuideRegDTO, @Session() session) : any {
        console.log(tourguideRegInfo);
        this.managerService.regTourGuide(tourguideRegInfo, session.username);

        return "Tour Guide Registration Successful!";
    }


}