import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
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
}