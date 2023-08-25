import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req, Session, UnauthorizedException, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { TravellerService } from "./traveller.service";
import { TravellerDto, TravellerLoginDto, travellerMessageDTO } from "./traveller.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterError, diskStorage } from "multer";
import session = require("express-session");
import { SessionGuard } from "./session.guard";
import { TourguidDto } from "src/Tourguid/tourguid.dto";
import { TourguidEntity } from "src/Tourguid/tourguid.entity";

@Controller('traveller')
export class TravellerController{
    constructor (private readonly travellerService:TravellerService) {}

    //register traveller 
    @Post('register')
    @UsePipes(new ValidationPipe())
    travellerReg (@Body() tourguidRegInfo:TravellerDto) : any {
        console.log(tourguidRegInfo);
        return this.travellerService.travellerReg(tourguidRegInfo);
    }

    // traveller log in 
    @Post('login')
    @UsePipes(new ValidationPipe())
    async loginTraveller (@Body() travellerLogininfo:TravellerLoginDto, @Session() session) {
        console.log(travellerLogininfo);
        const traveller=await this.travellerService.loginTraveller(travellerLogininfo)
        if (traveller) {

            session.email = travellerLogininfo.email;
            // console.log(session.email);
            return session.email;
           
           
        } else {
            session.email = travellerLogininfo.email;
            // console.log(session.email);
            return session.email;
        } 
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
        limits: { fileSize: 3000000 },
        storage:diskStorage({
            destination: './uploads',
            filename: function (req, file, cb) {
                cb(null, Date.now() + file.originalname)
            },
        })
    }))
    uploadTraveller(@UploadedFile() photoObj:Express.Multer.File, @Session() session) {
        console.log(photoObj.filename);
        const fileName = photoObj.filename;
        return this.travellerService.uploadTraveller(fileName, session.email);
    }

    // Add tourguid By traveller Id
    @Post('register/tourguid')
    @UsePipes(new ValidationPipe())
     @UseGuards(SessionGuard)
    regTourguid(@Body() tourguidLogInfo:TourguidDto, @Session() session) {
        console.log(tourguidLogInfo);
        return this.travellerService.regTourguid(tourguidLogInfo, session.email);
    }

    //traveller search tourguid
    @Get('search/tourguid')
    @UseGuards(SessionGuard)
    gettourguidBytravellerId ( @Session() session) : any {
        return this.travellerService.gettourguidBytravellerId(session.email);
    }

    @Get('searchtourguid')
    @UseGuards(SessionGuard)
    gettourguidBytraveller () : Promise<TourguidEntity[]> {
        return this.travellerService.gettourguidBytraveller();
    }


    //Update Traveller Info
    @Put('updatetravellerinfo')
    @UsePipes(new ValidationPipe())
    @UseGuards(SessionGuard)
    updateTravellerInfo(@Body() travellerUpdateInfo:TravellerDto, @Session() session) : any {
        console.log(travellerUpdateInfo);
        return this.travellerService.updatetravellerInfo(travellerUpdateInfo, session.email);
    }

    //Delete

    
      @Delete('delete/tourguid/:tourguidId')
      @UseGuards(SessionGuard)
      deleteTourguid(@Param('tourguidId', ParseIntPipe) tourguidId:number, @Session() session) : any {
          return this.travellerService.deleteTourguid(tourguidId, session.email);
      }

      //tourguid Update

      @Put('updatetourguidinfo')
    @UsePipes(new ValidationPipe())
    @UseGuards(SessionGuard)
    updatetourguidInfo(@Body() tourguidUpdateInfo:TourguidDto, @Session() session) : any {
        console.log(tourguidUpdateInfo);
        return this.travellerService.updatetourguidInfo(tourguidUpdateInfo, session.email);
    }

    //mailer

      @Post('sent/tourguid')
      @UseGuards(SessionGuard)
      sendMailtourguid (@Body() messageData:travellerMessageDTO, @Session() session) {
          console.log(messageData);
          return this.travellerService.sendMailtourguid(messageData, session.email);
      }

      @Post('/signout')
    signout( @Req() req) {
        if (req.session.destroy()) {
            return true;
        }
        else {
            throw new UnauthorizedException("invalid actions");
        }
    }


        
    }



