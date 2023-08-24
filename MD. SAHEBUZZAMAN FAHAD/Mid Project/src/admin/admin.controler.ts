import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Req, Res, Session, UnauthorizedException, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { AdminDto, AdminLoginDto, AdminMessageDTO } from "./admin.dto";
import { AdminService } from "./admin.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { SessionGuard } from "./session.gurd";
import { MulterError, diskStorage } from "multer";
import { ManagerDto } from "src/manager/manager.dto";
import { TravelerDto } from "src/traveler/traveler.dto";
import { TourGuidDto } from "src/tourguid/tourguid.dto";
import { promises } from "dns";
import { ManagerEntity } from "src/manager/manager.entity";
import session from "express-session";
import { TravelerEntity } from "src/traveler/traveler.entity";
import { TourGuidEntity } from "src/tourguid/tourguid.entity";

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) { }




    @Get('getmanager/:id')
    async findOneByIdm(@Param('id') id: number) {
        return this.adminService.findOneByIdm(id);
    }

    @Get('gettraveller/:id')
    async findOneByIdTraveller(@Param('id') id: number) {
        return this.adminService.findOneByIdTraveller(id);
    }


    @Get('gettourguid/:id')
    async findOneByIdTourguid(@Param('id') id: number) {
        return this.adminService.findOneByIdTourguid(id);
    }


    //register admin 
    @Post('register')
    @UsePipes(new ValidationPipe())
    adminReg(@Body() adminRegInfo: AdminDto, @UploadedFile() imageobj: Express.Multer.File) {
        console.log(adminRegInfo);
        // adminRegInfo.filename = imageobj.filename;
        return this.adminService.adminReg(adminRegInfo);
    }

    // admin log in 
    @Post('login')
    @UsePipes(new ValidationPipe())
    async loginAdmin(@Body() adminLogininfo: AdminLoginDto, @Session() session) {
        console.log(adminLogininfo);
        const admin = await this.adminService.loginAdmin(adminLogininfo);
        if (admin) {
            session.email = adminLogininfo.email;
            return session.email;

        } else {
            return new NotFoundException({ message: "Admin Login Failed!" });
        }


    }

    //upload
    // @Put('upload')
    // @UseGuards(SessionGuard)
    // @UseInterceptors(FileInterceptor('image',
    // {   
    //     fileFilter: (req, file, cb) => {
    //         if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/)) {
    //             cb(null, true);
    //         } else {
    //             cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
    //         }
    //     },
    //     limits: { fileSize: 30000000 },
    //     storage:diskStorage({
    //         destination: './uploads',
    //         filename: function (req, file, cb) {
    //             cb(null, Date.now() + file.originalname)
    //         },
    //     })
    // }))
    // uploadAdmin(@UploadedFile() photoObj:Express.Multer.File, @Session() session) {
    //     console.log(photoObj.filename);
    //     const fileName = photoObj.filename;
    //     return this.adminService.uploadAdmin(fileName, session.email);
    // }


    //Add manager By admin Id
    @Post('register/manager')
    @UsePipes(new ValidationPipe())
    @UseGuards(SessionGuard)
    regManager(@Body() managerLogInfo: ManagerDto, @Session() session) {
        console.log(managerLogInfo);
        return this.adminService.regManager(managerLogInfo, session.email);
    }

    // @Post('payment/data')
    // @UsePipes(new ValidationPipe())
    // paymenH(@Body() paymentInfo:PaymentEntity) {

    //     return this.adminService.paymenH(paymentInfo);
    // }

    //Admin search manager
    @Get('search/manager')
    @UseGuards(SessionGuard)
    getManagerByAdminId(@Session() session): any {
        return this.adminService.getManagerByAdminId(session.email);
    }


    //this code only show frontend manager all data and admin info
    @Get('allmanager')
    @UseGuards(SessionGuard)
    getManagerAll( @Session() session): Promise<ManagerEntity[]> {
        return this.adminService.getManagerAll();
    }


    @Get('alltraveller')
    @UseGuards(SessionGuard)
    getAllTraveller(): Promise<TravelerEntity[]> {
        return this.adminService.getAllTraveller()
    }

    @Get('alltourguid')
    @UseGuards(SessionGuard)
    getTourguidAll( @Session() session): Promise<TourGuidEntity[]> {
        return this.adminService.getTourguidAll();
    }

    //Add Traveler By Admin
    @Post('register/traveler')
    @UsePipes(new ValidationPipe())
    @UseGuards(SessionGuard)
    regTraveler(@Body() travelerLogInfo: TravelerDto, @Session() session) {
        console.log(travelerLogInfo);
        return this.adminService.regTraveler(travelerLogInfo, session.email);
    }

    //Admin search Traveler
    @Get('search/traveler')
    @UseGuards(SessionGuard)
    getTravelerByAdminId(@Session() session): any {
        return this.adminService.getTravelerByAdminId(session.email);
    }


    //Add Tourguid By Admin ID
    @Post('register/tourguid')
    @UsePipes(new ValidationPipe())
    @UseGuards(SessionGuard)
    regTourGuid(@Body() tourGuidLogInfo: TourGuidDto, @Session() session) {
        console.log(tourGuidLogInfo);
        return this.adminService.regTourGuid(tourGuidLogInfo, session.email);
    }


    //Admin search Tour Guid BY Admin ID
    @Get('search/tourguid')
    @UseGuards(SessionGuard)
    getTourGuidrByAdminId(@Session() session): any {
        return this.adminService.getTourGuidrByAdminId(session.email);
    }


    //Update Admin data
    @Put('updateadmininfo')
    @UsePipes(new ValidationPipe())
    @UseGuards(SessionGuard)
    updateAdminInfo(@Body() adminUpdateInfo: AdminDto, @Session() session): any {
        console.log(adminUpdateInfo);
        // session.email = adminUpdateInfo.email;
        return this.adminService.updateAdminInfo(adminUpdateInfo, session.email);
    }

    //Update manager data
    @Put('updatemanagerinfo')
    @UsePipes(new ValidationPipe())
    @UseGuards(SessionGuard)
    updateManagerInfo(@Body() managerUpdateInfo: ManagerDto, @Session() session): any {
        console.log(managerUpdateInfo);
        return this.adminService.updateManagerInfo(managerUpdateInfo, session.email);
    }

    //Update Traveler data
    @Put('updatetravelerinfo')
    @UsePipes(new ValidationPipe())
    @UseGuards(SessionGuard)
    updateTravelerInfo(@Body() travelerUpdateInfo: TravelerDto, @Session() session): any {
        console.log(travelerUpdateInfo);
        return this.adminService.updateTravelerInfo(travelerUpdateInfo, session.email);
    }

    //Update tourguid data
    @Put('updatetourguidinfo')
    @UsePipes(new ValidationPipe())
    @UseGuards(SessionGuard)
    updateTourguidInfo(@Body() tourguidUpdateInfo: TourGuidDto, @Session() session): any {
        console.log(tourguidUpdateInfo);
        return this.adminService.updateTourguidInfo(tourguidUpdateInfo, session.email);
    }



    //Delete Manager by Admin ID
    @Delete('delete/manager/:managerId')
    @UseGuards(SessionGuard)
    async deleteManager(@Param('managerId', ParseIntPipe) managerId: number, @Session() session): Promise<any> {
        return this.adminService.deleteManager(managerId, session.email);

    }

    // @Delete('deletemanager')
    // async deleteManagerone(@Param('id') id:number ) : Promise<ManagerEntity>{
    //     return this.adminService.deleteManagerone(id);
    // }


    //Delete Traveller by Admin ID
    @Delete('delete/traveler/:travelerId')
    @UseGuards(SessionGuard)
    deleteTraveler(@Param('travelerId', ParseIntPipe) travelerId: number, @Session() session): any {
        return this.adminService.deleteTraveler(travelerId, session.email);
    }

    //Delete TourGuid by Admin ID
    @Delete('delete/tourguid/:tourguidId')
    @UseGuards(SessionGuard)
    deleteTourGuid(@Param('tourguidId', ParseIntPipe) tourguidId: number, @Session() session): any {
        return this.adminService.deleteTourGuid(tourguidId, session.email);
    }


    //Sent message manager
    @Post('sent/manager')
    @UseGuards(SessionGuard)
    sendMailManager(@Body() messageData: AdminMessageDTO, @Session() session) {

        return this.adminService.sendMailManager(messageData, session.email);
    }

    @Post('/signout')
    signout(@Req() req) {
        if (req.session.destroy()) {
            return true;
        }
        else {
            throw new UnauthorizedException("invalid actions");
        }
    }


    //try
    @Get('/getimage/:name')
    getImages(@Param('name') name, @Res() res) {
        res.sendFile(name, { root: './uploads' })
    }

}