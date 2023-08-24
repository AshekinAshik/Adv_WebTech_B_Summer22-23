import { Body, Controller, Delete, ForbiddenException, Get, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe, Post, Put, Query, Req, Request, Res, Response, Session, UnauthorizedException, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
//import session from "express-session";
import session = require("express-session");
import { diskStorage, MulterError } from "multer";
import { TourGuideRegDTO, TourGuideUpdateDTO } from "src/tourguide/tourguide.dto";
import { TravellerRegDTO, TravellerTourGuideDTO, TravellerUpdateDTO } from "src/traveller/traveller.dto";
import { TravellerEntity } from "src/traveller/traveller.entity";
import { addManagerToTourGuideDTO, HotelDetailsDTO, ManagerLoginDTO, ManagerMessageDTO, ManagerRegDTO, ManagerUpdateDTO } from "./manager.dto";
import { ManagerService } from "./manager.service";
import { SessionGuard } from "./session.guard";

@Controller('manager')
export class ManagerController {
    constructor(private readonly managerService: ManagerService) { }

    @Post('register')
    @UsePipes(new ValidationPipe())
    regManager(@Body() managerRegInfo: ManagerRegDTO): any {
        console.log(managerRegInfo);
        this.managerService.regManager(managerRegInfo);

        return "Manager Registration Successful!";
    }

    @Post('login')
    @UsePipes(new ValidationPipe())
    async loginManager(@Body() managerLoginInfo: ManagerLoginDTO, @Session() session) {
        console.log(managerLoginInfo);

        const result = await this.managerService.loginManager(managerLoginInfo);

        if (result) {
            session.username = managerLoginInfo.username;
            // return "Manager Login Successful!";
            // return session.username;
            console.log("login session username: " + session.username);
            // return result;
            return session.username;
        } else {
            return new NotFoundException({ message: "Manager Not Found!" });
        }

        // if (await this.managerService.loginManager(managerLoginInfo)) {
        //     session.username = managerLoginInfo.username;
        //     return "Manager Login Successful!";
        // } else {
        //     return "Manager Login Failed!";
        // }
    }

    @Put('upload')
    @UseGuards(SessionGuard)
    @UseInterceptors(FileInterceptor('image',
        {
            fileFilter: (req, file, cb) => {
                if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg|gif)$/)) {
                    cb(null, true);
                } else {
                    cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
                }
            },
            limits: { fileSize: 300000 }, //bytes
            storage: diskStorage({
                destination: './uploads',
                filename: function (req, file, cb) {
                    cb(null, Date.now() + file.originalname)
                },
            })
        }))
    uploadManager(@UploadedFile() photoObj: Express.Multer.File, @Session() session) {
        console.log(photoObj.filename);
        const fileName = photoObj.filename;
        return this.managerService.uploadManager(fileName, session.username);
    }

    @Put('updateinfo')
    @UsePipes(new ValidationPipe())
    // @UseGuards(SessionGuard)
    updateManagerInfo(@Body() managerUpdateInfo: ManagerUpdateDTO, @Session() session): any {
        console.log(managerUpdateInfo);
        this.managerService.updateManagerInfo(managerUpdateInfo, session.username);

        return "Manager Update Successful!";
    }

    @Get('profile')
    @UseGuards(SessionGuard)
    viewManagerProfile(@Session() session) {
        return this.managerService.viewManagerProfile(session.username);
    }

    // @Delete('remove')
    // @UseGuards(SessionGuard)
    // removeManager(@Session() session) : any {
    //     return this.managerService.removeManager(session.username);
    // }

    @Post('register/traveller')
    @UsePipes(new ValidationPipe())
    // @UseGuards(SessionGuard)
    regTraveller(@Body() travellerRegInfo: TravellerRegDTO, @Session() session): any {
        console.log(travellerRegInfo);
        const resp = this.managerService.regTraveller(travellerRegInfo, session.username);
        // console.log(resp);

        return "Traveller Registration Successful!"
    }

    // @Get('search/traveller')
    // // @UseGuards(SessionGuard)
    // getTraveller(@Session() session) : any {
    //     return this.managerService.getTraveller(session.username);
    // }

    //edited for frontend
    @Get('search/traveller')
    @UseGuards(SessionGuard)
    getTraveller(@Session() session): Promise<TravellerEntity[]> {
        return this.managerService.getTraveller(session.username);

        // return this.managerService.getTraveller();
    }

    @Get('search/traveller/:travellerId')
    @UseGuards(SessionGuard)
    async getTravellerById(@Param("travellerId", ParseIntPipe) travellerId: number, @Session() session) {
        const res = this.managerService.getTravellerById(travellerId, session.username);
        if (res) {
            return res;
        } else {
            return new NotFoundException({ message: "Traveller Not Found!" });
        }
    }

    @Put('updateinfo/traveller/:travellerId')
    // @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    updateTraveller(@Param("travellerId", ParseIntPipe) travellerId: number, @Body() travellerUpdateInfo: TravellerUpdateDTO, @Session() session) {
        console.log(travellerUpdateInfo);
        return this.managerService.updateTraveller(travellerId, travellerUpdateInfo, session.username);

        //return "Traveller Update Successful!";
    }

    @Delete('remove/traveller/:travellerId')
    // @UseGuards(SessionGuard)
    removeTraveller(@Param('travellerId', ParseIntPipe) travellerId: number, @Session() session): any {
        return this.managerService.removeTraveller(travellerId, session.username);

        // return "Traveller Delete Successful!";
    }

    @Post('sendmail/traveller')
    // @UseGuards(SessionGuard)
    sendMailToTraveller(@Body() messageInfo: ManagerMessageDTO, @Session() session) {
        console.log(messageInfo);
        this.managerService.sendMailToTraveller(messageInfo, session.username);

        return "E-mail Send Successful!";
    }

    @Post('register/tourguide')
    @UsePipes(new ValidationPipe())
    @UseGuards(SessionGuard)
    regTourGuide(@Body() tourguideRegInfo: TourGuideRegDTO, @Session() session): any {
        console.log(tourguideRegInfo);
        this.managerService.regTourGuide(tourguideRegInfo, session.username);

        return "Tour Guide Registration Successful!";
    }

    @Get('search/tourguide')
    // @UseGuards(SessionGuard)
    getTourGuidesByManager(@Session() session) {
        return this.managerService.getTourGuidesByManager(session.username);
    }

    @Put('assigntourguide')
    // @UseGuards(SessionGuard)
    addTourGuideToTraveller(@Query() travellerAndTourGuide: TravellerTourGuideDTO, @Session() session) {
        return this.managerService.addTourGuideToTraveller(session.username, travellerAndTourGuide);
    }

    @Post('register/hotel')
    // @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    addHotel(@Body() hotelDetails: HotelDetailsDTO, @Session() session): any {
        console.log(hotelDetails);
        return this.managerService.addHotel(hotelDetails, session.username);
    }

    @Post('logout')
    // @UseGuards(SessionGuard)
    logoutManager(@Req() req) {
        if (req.session.destroy()) {
            console.log('Manager Sign Out');
            return true;
        } else {
            throw new UnauthorizedException("Invalid Actions : Cannot Sign Out Manager!");
        }
    }

    // @Post('logout')
    // async logoutManager(@Req() req, @Session() session): Promise<boolean> {
    //     return new Promise<boolean>((resolve, reject) => {
    //         req.session.destroy((err) => {
    //             if (err) {
    //                 throw new UnauthorizedException("Invalid Actions: Cannot Sign Out Manager!");
    //             }
    //             console.log('Manager Sign Out');
    //             resolve(true);
    //         });
    //     });
    // }


    // @Put('updateinfo/tourguide/:tourGuideId')
    // @UseGuards(SessionGuard)
    // @UsePipes(new ValidationPipe())
    // updateTourGuideByManager(@Param('tourGuideId', ParseIntPipe) tourGuideId:number, @Body() tourGuideUpdateInfo:TourGuideUpdateDTO, @Session() session) {
    //     return this.managerService.updateTourGuideByManager(tourGuideId, tourGuideUpdateInfo, session.username);
    // }

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