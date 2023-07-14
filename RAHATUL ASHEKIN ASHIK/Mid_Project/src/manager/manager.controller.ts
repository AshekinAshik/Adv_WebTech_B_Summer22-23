import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Session, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
//import session from "express-session";
import session = require("express-session");
import { diskStorage, MulterError } from "multer";
import { TourGuideRegDTO } from "src/tourguide/tourguide.dto";
import { TravellerRegDTO } from "src/traveller/traveller.dto";
import { ManagerLoginDTO, ManagerRegDTO, ManagerUpdateDTO } from "./manager.dto";
import { ManagerService } from "./manager.service";
import { SessionGuard } from "./session.guard";

@Controller('manager')
export class ManagerController {
    constructor (private readonly managerService:ManagerService) {}

    @Post('register')
    @UsePipes(new ValidationPipe())
    regManager (@Body() managerRegInfo:ManagerRegDTO) : any {
        console.log(managerRegInfo);
        return this.managerService.regManager(managerRegInfo);
    }

    @Post('login')
    @UsePipes(new ValidationPipe())
    async loginManager (@Body() managerLoginInfo:ManagerLoginDTO, @Session() session) {
        console.log(managerLoginInfo);

        //const x = await this.managerService.loginManager(managerLoginInfo);
        if (await this.managerService.loginManager(managerLoginInfo)) {
            //console.log(x);
            session.username = managerLoginInfo.username;
            //console.log(session.username);
            return "Manager Login Successful!";
        } else {
            return "Manager Login Failed!";
        } 

        // if (this.managerService.loginManager(managerLoginInfo)) {
        //     session.username = managerLoginInfo.username;
        //     return true;
        // } else {
        //     return false;
        // }
    }

    @Put('upload')
    @UseGuards(SessionGuard)
    @UseInterceptors(FileInterceptor('image',
    {   
        fileFilter: (req, file, cb) => {
            if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/)) {
                cb(null, true);
            } else {
                cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
            }
        },
        limits: { fileSize: 300000 },
        storage:diskStorage({
            destination: './uploads',
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname)
            },
        })
    }))
    uploadManager(@UploadedFile() photoObj:Express.Multer.File, @Session() session) {
        console.log(photoObj.filename);
        const fileName = photoObj.filename;
        return this.managerService.uploadManager(fileName, session.username);
    }

    @Post('register/traveller')
    @UsePipes(new ValidationPipe())
    @UseGuards(SessionGuard)
    regTraveller(@Body() travellerRegInfo:TravellerRegDTO, @Session() session) {
        console.log(travellerRegInfo);
        return this.managerService.regTraveller(travellerRegInfo, session.username);
    }

    //MANAGER can only search TRAVELLER by their ID
    @Get('search/traveller')
    @UseGuards(SessionGuard)
    getTravellerByManagerId (@Session() session) : any {
        return this.managerService.getTravellerByManagerId(session.username);
    }

    @Put('updateinfo')
    @UsePipes(new ValidationPipe())
    @UseGuards(SessionGuard)
    updateManagerInfo(@Body() managerUpdateInfo:ManagerUpdateDTO, @Session() session) : any {
        console.log(managerUpdateInfo);
        return this.managerService.updateManagerInfo(managerUpdateInfo, session.username);
    }

    @Delete('remove')
    @UseGuards(SessionGuard)
    removeManager(@Session() session) : any {
        return this.managerService.removeManager(session.username);
    }
    
    @Delete('remove/traveller/:travellerId')
    @UseGuards(SessionGuard)
    removeTraveller(@Param('travellerId', ParseIntPipe) travellerId:number, @Session() session) : any {
        return this.managerService.removeTraveller(travellerId, session.username);
    }

    @Post('register/tourguide')
    @UsePipes(new ValidationPipe())
    regTourGuide(@Body() tourguideRegInfo:TourGuideRegDTO) : any {
        console.log(tourguideRegInfo);
        return this.managerService.regTourGuide(tourguideRegInfo);
    }

    //MANAGER can only delete TRAVELER where their ID is assocaited
    // @Delete('remove/traveler')
    // removeTraveler (@Query() managerId, @Query("travelerId", ParseIntPipe) travelerId:number) : any {
    //     return this.managerService.removeTraveler(managerId, travelerId);
    // }

    //MANAGER can only update TRAVELER where their ID is assocaited
    // @Put('update/traveler')
    // updateTraveler (@Query("managerId", ParseIntPipe) managerId:number, @Query("travelerId", ParseIntPipe) travelerId:number) : any {
    //     return this.managerService.updateTraveler(managerId, travelerId);
    // }
}