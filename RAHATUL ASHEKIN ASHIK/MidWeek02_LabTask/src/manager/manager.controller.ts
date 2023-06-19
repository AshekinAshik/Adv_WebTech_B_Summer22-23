import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, Res, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage, MulterError } from "multer";
import { HotelRegDTO, ManagerLoginDTO, ManagerRegDTO, ManagerUpdatebyIdDTO, ManagerUpdateDTO, TourGuideDTO, VehicleRegDTO } from "./manager.dto";
import { ManagerService } from "./manager.service";

@Controller('manager')
export class ManagerController {
    constructor(private readonly managerService:ManagerService) {}

    //FEATURE #1 Registration
    @Post('register')
    @UsePipes(new ValidationPipe())
    regManager(@Body() managerRegInfo:ManagerRegDTO) : any {
        return this.managerService.regManager(managerRegInfo);
    }

    //FEATURE #2 Login
    @Post('login')
    @UsePipes(new ValidationPipe())
    loginManager(@Body() managerLoginInfo:ManagerLoginDTO) : any {
        return this.managerService.loginManager(managerLoginInfo);
    }

    //FEATURE #3 View Traveler
    @Get('travelerinfo')
    getTravelerInfo() : any {
        return this.managerService.getTravelerInfo();
    }
    @Get('travelerinfo/:id')
    getTravelerInfobyID(@Param('id', ParseIntPipe) id:number) : any {
        return this.managerService.getTravelerInfobyID(id);
    }

    //FEATURE #4 View Tour Guide
    @Get('tourguideinfo')
    getTourGuideInfo() : any {
        return this.managerService.getTourGuideInfo();
    }
    @Get('tourguideinfo/search')
    @UsePipes(new ValidationPipe())
    getTourGuideInfobyNameandLocation(@Query() tg_qry:TourGuideDTO) : any {
        return this.managerService.getTourGuideInfobyNameandLocation(tg_qry);
    }

    //FEATURE #5 Modify(update) Own Information
    @Put('modifymanager')
    @UsePipes(new ValidationPipe())
    modifyManager(@Body() mod_mgr:ManagerUpdateDTO) : any {
        return this.managerService.modifyManager(mod_mgr);
    }
    @Put('modifymanager/:id')
    @UsePipes(new ValidationPipe())
    modifyManagerbyID(@Param('id', ParseIntPipe) id:number, @Body() mod_mgr_id:ManagerUpdatebyIdDTO) : any {
        return this.managerService.modifyManagerbyID(id, mod_mgr_id);
    }

    //FEATURE #6 Delete Own Account
    @Delete('delete/:id')
    deleteManagerbyID(@Param('id', ParseIntPipe) id:number) : any {
        return this.managerService.deleteManagerbyID(id);
    }

    //FEATURE #7 Add Hotel
    @Post('register/hotels')
    @UsePipes(new ValidationPipe())
    regHotel(@Body() hotelInfo:HotelRegDTO) : any {
        return this.managerService.regHotel(hotelInfo);
    }

    //FEATURE #8 Add Vehicle
    @Post('register/vehicles')
    @UsePipes(new ValidationPipe())
    regVehicle(@Body() vehicleInfo:VehicleRegDTO) : any {
        return this.managerService.regVehicle(vehicleInfo);
    }

    //File Upload
    // @Post('upload')
    // @UseInterceptors(FileInterceptor('file'))
    // uploadFile(@UploadedFile() mgr_file:Express.Multer.File) {
    //     console.log(mgr_file);
    //     return ({message:"File Upload Successful!"});
    // }

    //File Upload, Validation
    @Post('upload')
    @UseInterceptors(FileInterceptor('file',
    { fileFilter: (req, file, cb) => {
        if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/)) {
            cb(null, true);
        }
        else {
            
            cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
        }
    },
    limits: { fileSize: 300000 },
    storage: diskStorage ({
        destination: './uploads',
        filename: function (req, file, cb) {
            cb(null,Date.now()+file.originalname);
        },
    })
    }
    ))
    uploadFile(@UploadedFile() mgr_file:Express.Multer.File) : object {
        console.log(mgr_file);
        return ({message:"File Upload Successful!"});
    }

    //File Storing
    @Get('/getfiles/:filename')
    getFiles(@Param('filename') filename, @Res() res) {
    res.sendFile(filename, { root: './uploads' })
    }
}