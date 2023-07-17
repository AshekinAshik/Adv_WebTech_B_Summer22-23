import { Body, Controller,Delete,Get, Param, ParseIntPipe, Post,Put,Query,Res,UploadedFile,UseInterceptors,UsePipes,ValidationPipe } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminDtoReg, AdminLogin, AdminModifyDto } from "./admin.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterError, diskStorage } from "multer";
@Controller('admin')

export class AdminControler{
    
    constructor(private readonly adminData:AdminService) {}
    
    @Post('regadmin')
    @UsePipes(new ValidationPipe())
    regAdmin(@Body() adminRegInfo:AdminDtoReg):any{
        return this.adminData.regAdmin(adminRegInfo);
    }

    @Post('adminlogin')
    @UsePipes(new ValidationPipe())
    logAdmin(@Body() adminlogInfo:AdminLogin):any{
        return this.adminData.logAdmin(adminlogInfo)
    }

    @Get('managerinfo/:id')
    showManagerInfoId(@Param()id:number):object{
        return this.adminData.showManagerInfoId(id)
    }
    @Get('Tarvelerinfo/:id')
    showTravelerInfoId(@Param() id:number):object {
        return this.adminData.showTravelerInfoId(id)
    }
    @Get('tourgaid/:id')
    showTourGaid(@Param() id:number):Object{
        return this.adminData.showTourGaid(id)
    }
    @Delete('deletemanager/:id')
    delManagerById(@Param()id:number):any{
        return this.adminData.delManagerById(id)
    }
    @Put('modifyadmindata')
    @UsePipes(new ValidationPipe)
    modifyAdminData(@Body() modifyadmin:AdminModifyDto):any{
        return this.adminData.modifyAdminData(modifyadmin)
    }


    
    @Post(('/upload'))
@UseInterceptors(FileInterceptor('myfile',
{ fileFilter: (req, file, cb) => {
    if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
     cb(null, true);
    else {
    cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
    }
    },
    limits: { fileSize: 30000 },
    storage:diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
    cb(null,Date.now()+file.originalname)
    },
    })
    }
))
uploadFile(@UploadedFile() myfileobj: Express.Multer.File):object
{
 console.log(myfileobj)   
return ({message:"file uploaded"});
}

@Get('/getimage/:name')
getImages(@Param('name') name, @Res() res) {
 res.sendFile(name,{ root: './uploads' })
 }

}