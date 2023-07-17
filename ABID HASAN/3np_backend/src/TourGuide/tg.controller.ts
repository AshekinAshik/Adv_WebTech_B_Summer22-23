import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { TourGuideService } from "./tg.service";
import { FileInterceptor} from "@nestjs/platform-express";
import {MulterError, diskStorage} from "multer";
import { validateHeaderName } from "http";
import { CustomerPaymentReceiveDTO, TourGuideLoginDTO, TourGuideRegDTO, TourGuideUpdateDTO } from "./tg.dto";


@Controller('tourguide')
export class TourGuideController{

    constructor(private readonly tourguideService: TourGuideService){}
   
   @Post('register')
   @UsePipes(new ValidationPipe())
   regTourGuide(@Body() tourguideRegInfo:TourGuideRegDTO) :any{
    return this.tourguideService.regTourGuide(tourguideRegInfo);
   }

   @Post('login')
   @UsePipes(new ValidationPipe())
   loginTourGuide(@Body() tourguideLoginInfo:TourGuideLoginDTO): any{
    return this.tourguideService.loginTourGuide(tourguideLoginInfo);
   }
   
   @Get('hotelsinfo')
   getHotelInfo(): any{
    return this.tourguideService.getHotelInfo();
   }

   @Get('vehicleinfo')
   getVehicleInfo(): any{
    return this.tourguideService.getVehicleInfo();
   }
   
   @Put('updatetourguide')
   @UsePipes(new ValidationPipe())
   updateTourGuide(@Body() tourguideupdate:TourGuideUpdateDTO): any{
    return this.tourguideService.updateTourGuide(tourguideupdate);
   }

   @Get('travelerinfo/:id')
   getTravelerInfoByID(@Param('id', ParseIntPipe) id:number): any{
    return this.tourguideService.getTravelerInfoByID(id)
   }

   @Delete('delete/:id')
   deleteTourGuideByID(@Param('id', ParseIntPipe) id:number): any{
    return this.tourguideService.deleteTourGuideByID(id);
   }

   @Post('receivepayment/:id')
   @UsePipes(new ValidationPipe())
   receivePaymentByID(@Body() paymentreceive:CustomerPaymentReceiveDTO): any{
    return this.tourguideService.receivePaymentByID(paymentreceive);
   }

   
   
   
   
   
   
   
   
   
   
   
//     @Post(('/upload'))
//     @UseInterceptors(FileInterceptor('myfile',
//     { fileFilter: (req, file, cb) => {
//         if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
//          cb(null, true);
//         else {
//         cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
//         }
//         },
//         limits: { fileSize: 30000 },
//         storage:diskStorage({
//         destination: './uploads',
//         filename: function (req, file, cb) {
//         cb(null,Date.now()+file.originalname)
//         },
//         })
//         }
    
    
    
    
    
    
// ))

    
} 