import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, ParseIntPipe, Post, Put, Req, Session, UnauthorizedException, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe} from "@nestjs/common";
import { TourGuideService } from "./tg.service";
import { FileInterceptor} from "@nestjs/platform-express";
import {MulterError, diskStorage} from "multer";
import { validateHeaderName } from "http";
import { TourGuideLoginDTO, TourGuideRegDTO, TourGuideUpdateDTO, PaymentReceiveDTO, CreateTourPackDTO, HotelandVehicleDTO, TourgudieMessageDTO } from "./tg.dto";
import session = require("express-session");
import { SessionGuard } from "./session.gaurd";
import { PaymentEntity, TourGuideEntity, createTourPackEntity } from "./tg.entity";
import { TravellerRegDTO } from "src/Traveller/traveller.dto";
import { TravellerEntity } from "src/Traveller/traveller.entiry";




@Controller('tourguide')
export class TourGuideController{

    constructor(private readonly tourguideService: TourGuideService){}
   
    // Tourguide Registration 
   @Post('/registration')
//    @UseInterceptors(FileInterceptor('myfile',
//    {
//        fileFilter: (req, file, cb) => {
//            if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
//                cb(null, true);
//            else {
//                cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
//            }
//        },
//        limits: { fileSize: 300000000 },
//        storage: diskStorage({
//            destination: './uploads',
//            filename: function (req, file, cb) {
//                cb(null, Date.now() + file.originalname)
//            },
//        })
//    }
// ))
   @UsePipes(new ValidationPipe())
   regTourGuide(@Body() tourguideRegInfo:TourGuideRegDTO) { //@UploadedFile() imageobj: Express.Multer.File
    console.log(tourguideRegInfo);
    // tourguideRegInfo.filename=imageobj.filename;
    return this.tourguideService.regTourGuide(tourguideRegInfo);
   }

   // Tourguide can login 
   @Post('/login')
    @UsePipes(new ValidationPipe())
    async loginTourGudie (@Body() tourguideLoginInfo:TourGuideLoginDTO, @Session() session) {
        console.log(tourguideLoginInfo);

        const user = await this.tourguideService.loginTourGuide(tourguideLoginInfo);
        if (user) {
           // const res =await this.tourguideService.loginTourGuide(tourguideLoginInfo);
            //console.log();
            
                session.name = tourguideLoginInfo.name;
            //console.log(session.name);  
            return "Login Successful!";
            //return session.name;
            
           
        } else{
            return  new NotFoundException({message:"tourgudie name email password don't match"});
        }
        
         
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
   updateTourGuide(@Body() tourgudieUpdateInfo:TourGuideUpdateDTO,@UploadedFile() imageobj: Express.Multer.File,@Session() session): any{ //,@UploadedFile() imageobj: Express.Multer.File,@Session() session
    console.log(tourgudieUpdateInfo);
   //tourgudieUpdateInfo.filename=imageobj.filename;
    return this.tourguideService.updateTourGuide(session.name, tourgudieUpdateInfo);
   }

   // Can delete Own Account 
    @Delete('/delete')
    @UseGuards(SessionGuard)
    deleteTourGuide(@Session() session): any{
    return this.tourguideService.deleteTourGuide(session.name);

    }

    // @Get('profile')
    // @UseGuards(SessionGuard)
    // viewTourguideProfile(@Session() session){
    //     return this.tourguideService.viewTourguideProfile(session.name);
    // }

    //for seeing data of traveller and remove add travller is conducted

    @Post('/addtraveller')
    @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    addTraveller(@Body() travellerRegInfo:TravellerRegDTO, @Session() session) {
        console.log(travellerRegInfo);
         this.tourguideService.addTraveller(travellerRegInfo, session.name);//session.username (changed)
         return "Traveller Registration Successful"

    }

    @Get('search/traveller')
    @UseGuards(SessionGuard)
    getTraveller(@Session() session):Promise<TravellerEntity[]>{
        return this.tourguideService.getTraveller(session.name)
    }

    @Get('search/traveller/:travellerId')
    @UseGuards(SessionGuard)
    async getTravellerById(@Param("travellerId", ParseIntPipe) travellerId:number, @Session() session) {
        const res = this.tourguideService.getTravellerById(travellerId, session.name); // session.username (changed)
        if (res !== null) {
            return res;
        } else {
            throw new NotFoundException({
                status: HttpStatus.NOT_FOUND,
                message: "Traveller Not Found!"
            });
        }
    }

    @Delete('/removetraveller/:travellerId')
   @UseGuards(SessionGuard)
   async removeTraveller(@Param('travellerId', ParseIntPipe) travellerId:number, @Session() session): Promise<any>{
    return this.tourguideService.removeTraveller(travellerId, session.name);
   }

   @Get('/gettraveller/:id')
   async findOneByTravellerId(@Param('id') id: number) {
    return this.tourguideService.findOneByTravellerId(id);
}

  
  
    @Get('/tourguideinfo')
   @UseGuards(SessionGuard)
   getTourGuideinfoByname(@Session() session): any{
    return this.tourguideService.getTourGuideinfoByname(session.name)
   }

   @Get('/tourguideinfoall')
   @UseGuards(SessionGuard)
   getTourGuideinfo(): Promise<TravellerEntity[]>{
    return this.tourguideService.getTourGuideinfo()
   }
   
   //remove travellers
   

   

   @Post('/receivepayment')
   @UseGuards(SessionGuard)
   @UsePipes(new ValidationPipe())
   receivePaymentByname(@Body() paymentreceiveInfo:PaymentReceiveDTO, @Session() session):any {
    console.log(paymentreceiveInfo);
    console.log("Payment received");
    return this.tourguideService.receivePaymentByname(paymentreceiveInfo, session.name);
   }

   //tourgudie can view all payment that has been made to him for recode
   @Get('/viewallpayment')
    @UseGuards(SessionGuard)
   @UsePipes(new ValidationPipe())
   getallpayment(@Session() session):Promise<PaymentEntity[]> {
    return this.tourguideService.getallpayment(session.name);
   }


   @Post('/createtourpack')
    @UseGuards(SessionGuard)
   @UsePipes(new ValidationPipe())
   createtourpack(@Body() createtourpackInfo:CreateTourPackDTO, @Session() session ) {
    console.log(createtourpackInfo);
    return this.tourguideService.createtourpack(createtourpackInfo, session.name);
   }

   @Get('/viewalltourpack')
   @UseGuards(SessionGuard)
  @UsePipes(new ValidationPipe())
  getalltourpack(@Session() session):Promise<createTourPackEntity[]> {
   return this.tourguideService.getalltourpack(session.name);
  }


   @Post('/bookhotelandvehicle')
     @UseGuards(SessionGuard)
   @UsePipes(new ValidationPipe())
   getbookhotelandvechicle(@Body() hotalandvechicleInfo:HotelandVehicleDTO, @Session() session){
    console.log(hotalandvechicleInfo);
    return this.tourguideService.getbookhotelandvehicle(hotalandvechicleInfo, session.name);
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
    console.log(messageInfo);
    this.tourguideService.sendmailtotraveller(messageInfo, session.name);
    return "E-mail Sent Successfully"

   }

   @Post('/logout')
   logout(@Req() req){
    if(req.session.destroy()){
        return "session distroyed";
    }
    else{
        throw new UnauthorizedException("Invalid actions");
    }
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
