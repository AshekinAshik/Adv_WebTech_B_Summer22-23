import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Session, UnauthorizedException, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe} from "@nestjs/common";
import { TourGuideService } from "./tg.service";
import { FileInterceptor} from "@nestjs/platform-express";
import {MulterError, diskStorage} from "multer";
import { validateHeaderName } from "http";
import { TourGuideLoginDTO, TourGuideRegDTO, TourGuideUpdateDTO, PaymentReceiveDTO, CreateTourPackDTO, HotelandVehicleDTO, TourgudieMessageDTO } from "./tg.dto";
import session = require("express-session");
import { SessionGuard } from "./session.gaurd";
import { TourGuideEntity } from "./tg.entity";
import { TravellerRegDTO } from "src/Traveller/traveller.dto";




@Controller('tourguide')
export class TourGuideController{

    constructor(private readonly tourguideService: TourGuideService){}
   
    // Tourguide Registration 
   @Post('/registration')
   @UseInterceptors(FileInterceptor('myfile',
   {
       fileFilter: (req, file, cb) => {
           if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
               cb(null, true);
           else {
               cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
           }
       },
       limits: { fileSize: 300000000 },
       storage: diskStorage({
           destination: './uploads',
           filename: function (req, file, cb) {
               cb(null, Date.now() + file.originalname)
           },
       })
   }
))
   @UsePipes(new ValidationPipe())
   regTourGuide(@Body() tourguideRegInfo:TourGuideRegDTO,@UploadedFile() imageobj: Express.Multer.File) {
    console.log(tourguideRegInfo);
     tourguideRegInfo.filename=imageobj.filename;
    return this.tourguideService.regTourGuide(tourguideRegInfo);
   }

   // Tourguide can login 
   @Post('/login')
    @UsePipes(new ValidationPipe())
    async loginTourGudie (@Body() tourguideLoginInfo:TourGuideLoginDTO, @Session() session) {
        console.log(tourguideLoginInfo);

        const user = await this.tourguideService.loginTourGuide(tourguideLoginInfo);
        if (user != null) {
            const res =await this.tourguideService.loginTourGuide(tourguideLoginInfo);
            //console.log();
            if(res){
                session.name = tourguideLoginInfo.name;
            //console.log(session.name);
            return "Login Successful!";
            }
            return  new NotFoundException({message:"tourgudie name email password don't match"});
        } 
        return  new UnauthorizedException({message:"tourgudie not found"});
         
    }
   
   // Tourguide can Update himself
   @Put('/updatetourguideinfo')
   @UseGuards(SessionGuard)
  @UseInterceptors(FileInterceptor('myfile',
  {
      fileFilter: (req, file, cb) => {
          if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
              cb(null, true);
          else {
              cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
          }
      },
      limits: { fileSize: 300000000 },
      storage: diskStorage({
          destination: './uploads',
          filename: function (req, file, cb) {
              cb(null, Date.now() + file.originalname)
          },
      })
  }
))
   @UsePipes(new ValidationPipe())
   updateTourGuide(@Body() tourgudieUpdateInfo:TourGuideUpdateDTO, @UploadedFile() imageobj: Express.Multer.File,@Session() session): any{
    console.log(tourgudieUpdateInfo);
    tourgudieUpdateInfo.filename=imageobj.filename;
    return this.tourguideService.updateTourGuide(session.name, tourgudieUpdateInfo);
   }

   // Can delete Own Account 
    @Delete('/delete')
    @UseGuards(SessionGuard)
    deleteTourGuide(@Session() session): any{
    return this.tourguideService.deleteTourGuide(session.name);

    }

    //for seeing data of traveller and remove add travller is conducted

    @Post('/addtraveller')
    @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    addTraveller(@Body() travellerRegInfo:TravellerRegDTO, @Session() session) {
        console.log(travellerRegInfo);
        return this.tourguideService.addTraveller(travellerRegInfo, session.username);
    }

  
  
    @Get('/tourguideinfo')
    @UseGuards(SessionGuard)
   getTourGuideinfoByname(@Session() session): any{
    return this.tourguideService.getTourGuideinfoByname(session.name)
   }
   
   //remove travellers
   @Delete('/removetraveller/:travellerId')
   @UseGuards(SessionGuard)
   removeTraveller(@Param('travellerId', ParseIntPipe) travellerId:number, @Session() session): any{
    return this.tourguideService.removeTraveller(travellerId, session.username);
   }

   

   @Post('/receivepayment')
    @UseGuards(SessionGuard)
   @UsePipes(new ValidationPipe())
   receivePaymentByname(@Body() paymentreceiveInfo:PaymentReceiveDTO) {
    console.log(paymentreceiveInfo);
    console.log("Payment received");
    return this.tourguideService.receivePaymentByname(paymentreceiveInfo);
   }

   //tourgudie can view all payment that has been made to him for recode
   @Get('/viewallpayment')
   @UseGuards(SessionGuard)
   @UsePipes(new ValidationPipe())
   getallpayment(@Session() session) {
    return this.tourguideService.getallpayment(session.name);
   }


   @Post('/createtourpack')
  @UseGuards(SessionGuard)
   @UsePipes(new ValidationPipe())
   createtourpack(@Body() createtourpackInfo:CreateTourPackDTO, @Session() session ) {
    console.log(createtourpackInfo);
    return this.tourguideService.createtourpack(createtourpackInfo, session.name);
   }


   @Post('/bookhotelandvehicle')
   @UseGuards(SessionGuard)
   @UsePipes(new ValidationPipe())
   getbookhotelandvechicle(@Body() hotalandvechicleInfo:HotelandVehicleDTO){
    console.log(hotalandvechicleInfo);
    return this.tourguideService.getbookhotelandvehicle(hotalandvechicleInfo);
   }
   
   
   //tourgudie can view manager info based on id

   @Get('/managerinfo')
   @UseGuards(SessionGuard)
   @UsePipes(new ValidationPipe())
   getallManagerInfo(@Session() session) {
    return this.tourguideService.getallManagerInfo(session.name)
   }


   @Post('/sendmail')
   @UseGuards(SessionGuard)
   sendmailtotraveller(@Body() messageInfo:TourgudieMessageDTO, @Session() session){

    return this.tourguideService.sendmailtotraveller(messageInfo, session.name);

   }








    //file upload with validation
//    @Post(('/upload'))
//    @UseInterceptors(FileInterceptor('myfile',
//        {
//            fileFilter: (req, file, cb) => {
//                if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
//                    cb(null, true);
//                else {
//                    cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
//                }
//            },
//            limits: { fileSize: 30000 },
//            storage: diskStorage({
//                destination: './uploads',
//                filename: function (req, file, cb) {
//                    cb(null, Date.now() + file.originalname)
//                },
//            })
//        }
//    ))
//    uploadFile(@UploadedFile() myfileobj: Express.Multer.File): object {
//     console.log(myfileobj)
//     return ({ message: "file uploaded" });
//}
    
   
   
   
   
   
   
   
   
    
    

    
} 

// function GetUser(): (target: TourGuideController, propertyKey: "deleteTourGuide", parameterIndex: 1) => void {
//     throw new Error("Function not implemented.");
// }
