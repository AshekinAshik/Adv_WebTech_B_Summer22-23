import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, ParseIntPipe, Post, Put, Session, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminDto, AdminLoginDto, AdminMessageDTO } from "./admin.dto";
import { SessionGuard } from "./session.gurd";
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterError, diskStorage } from "multer";
import session = require("express-session");
import { ManagerDto } from "src/manager/manager.dto";
import { TravelerDto } from "src/traveler/traveler.dto";
import { TourGuidDto } from "src/tourguid/tourguid.dto";
//import { PaymentEntity } from "src/payment.ts/payment.entity";


@Controller('admin')
export class AdminController{
    constructor (private readonly adminService:AdminService) {}


    //register admin 
    @Post('register')
    @UsePipes(new ValidationPipe())
    adminReg (@Body() managerRegInfo:AdminDto, @UploadedFile() imageobj: Express.Multer.File) {
        console.log(managerRegInfo);
        managerRegInfo.filename = imageobj.filename;
        return this.adminService.adminReg(managerRegInfo);
    }

    // admin log in 
    @Post('login')
    @UsePipes(new ValidationPipe())
    async loginAdmin (@Body() adminLogininfo:AdminLoginDto, @Session() session) {
        console.log(adminLogininfo);
        const admin = await this.adminService.loginAdmin(adminLogininfo);
        if (admin) {
            session.email = adminLogininfo.email;
            return "Admin Login Successful!";
        } else {
            return new NotFoundException({message: "Admin Login Failed!"});
        } 
        
        // if (await this.adminService.loginAdmin(adminLogininfo)) {
        //     session.email = adminLogininfo.email;
                       
        //     return "Admin Login Successful!";
        // } else {
        //     return "Admin Login Failed!";
        // } 
    }

    //upload
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
        limits: { fileSize: 30000000 },
        storage:diskStorage({
            destination: './uploads',
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname)
            },
        })
    }))
    uploadAdmin(@UploadedFile() photoObj:Express.Multer.File, @Session() session) {
        console.log(photoObj.filename);
        const fileName = photoObj.filename;
        return this.adminService.uploadAdmin(fileName, session.email);
    }


    //Add manager By admin Id
    @Post('register/manager')
    @UsePipes(new ValidationPipe())
    @UseGuards(SessionGuard)
    regManager(@Body() managerLogInfo:ManagerDto, @Session() session) {
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
    getManagerByAdminId (@Session() session) : any {
        return this.adminService.getManagerByAdminId(session.email);
        // if (eh !== null) {
        //     console.log(eh);
        //     return eh;
        // }
        // else {
        //     throw new NotFoundException({
        //         status: HttpStatus.NOT_FOUND,
        //         message: " not found"
        //     });
        // }
    }

    //Add Traveler By Admin
    @Post('register/traveler')
    @UsePipes(new ValidationPipe())
    @UseGuards(SessionGuard)
    regTraveler(@Body() travelerLogInfo:TravelerDto, @Session() session) {
        console.log(travelerLogInfo);
        return this.adminService.regTraveler(travelerLogInfo, session.email);
    }

    //Admin search Traveler
    @Get('search/traveler')
    @UseGuards(SessionGuard)
    getTravelerByAdminId (@Session() session) : any {
        return this.adminService.getTravelerByAdminId(session.email);
    }

     //Add Tourguid By Admin ID
     @Post('register/tourguid')
     @UsePipes(new ValidationPipe())
     @UseGuards(SessionGuard)
     regTourGuid(@Body() tourGuidLogInfo:TourGuidDto, @Session() session) {
         console.log(tourGuidLogInfo);
         return this.adminService.regTourGuid(tourGuidLogInfo, session.email);
     }


     //Admin search Tour Guid BY Admin ID
    @Get('search/tourguid')
    @UseGuards(SessionGuard)
    getTourGuidrByAdminId (@Session() session) : any {
        return this.adminService.getTourGuidrByAdminId(session.email);
    }


    //Update Admin data
    @Put('updateadmininfo')
    @UsePipes(new ValidationPipe())
    @UseGuards(SessionGuard)
    updateAdminInfo(@Body() adminUpdateInfo:AdminDto, @Session() session) : any {
        console.log(adminUpdateInfo);
        return this.adminService.updateAdminInfo(adminUpdateInfo, session.email);
    }

    //Update manager data
    @Put('updatemanagerinfo')
    @UsePipes(new ValidationPipe())
    @UseGuards(SessionGuard)
    updateManagerInfo(@Body() managerUpdateInfo:ManagerDto, @Session() session) : any {
        console.log(managerUpdateInfo);
        return this.adminService.updateManagerInfo(managerUpdateInfo, session.email);
    }

    //Update Traveler data
    @Put('updatetravelerinfo')
    @UsePipes(new ValidationPipe())
    @UseGuards(SessionGuard)
    updateTravelerInfo(@Body() travelerUpdateInfo:TravelerDto, @Session() session) : any {
        console.log(travelerUpdateInfo);
        return this.adminService.updateTravelerInfo(travelerUpdateInfo, session.email);
    }

    //Delete Manager by Admin ID
    @Delete('delete/manager/:managerId')
    @UseGuards(SessionGuard)
    async deleteManager(@Param('managerId', ParseIntPipe) managerId:number, @Session() session) : Promise<any> {
        return this.adminService.deleteManager(managerId, session.email);
        
    }

     //Delete Traveller by Admin ID
     @Delete('delete/traveler/:travelerId')
     @UseGuards(SessionGuard)
     deleteTraveler(@Param('travelerId', ParseIntPipe) travelerId:number, @Session() session) : any {
         return this.adminService.deleteTraveler(travelerId, session.email);
     }

      //Delete TourGuid by Admin ID
      @Delete('delete/tourguid/:tourguidId')
      @UseGuards(SessionGuard)
      deleteTourGuid(@Param('tourguidId', ParseIntPipe) tourguidId:number, @Session() session) : any {
          return this.adminService.deleteTourGuid(tourguidId, session.email);
      }


      //Sent message manager
      @Post('sent/manager')
      @UseGuards(SessionGuard)
      sendMailManager (@Body() messageData:AdminMessageDTO, @Session() session) {
          
          return this.adminService.sendMailManager(messageData, session.email);
      }


}