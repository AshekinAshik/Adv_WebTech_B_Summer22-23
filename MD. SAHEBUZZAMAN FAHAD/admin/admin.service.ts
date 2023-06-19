import { Injectable } from "@nestjs/common";
import { AdminDtoReg, AdminLogin, AdminModifyDto} from "./admin.dto";
@Injectable()

export class AdminService{
    regAdmin(adminRegInfo: AdminDtoReg):String {
        console.log(adminRegInfo)
        return ("Reg Successfully");
    }

    logAdmin(adminlogInfo:AdminLogin){
        console.log(adminlogInfo)
        return "Log in Successfully";
    }

    showManagerInfoId(id:number):object{
        return ({id:12, name : "Fahad", Age : 22, Address : "Comilla",Number :12456})
    }
    showTravelerInfoId(id:number):object{
        return ({Id : 1,Name : " Fahad", Age :22, Address :"Comilla", Number : 12})
    }
    showTourGaid(id:number):object{
        return ({Id : 11,Name : "Fahad",Age :23,Address:"Comilla",Number:124588})
    }
    delManagerById(id:number):string
    {
        return "Delete Success";
    }
    modifyAdminData(modifyadmin:AdminModifyDto):String{
        console.log(modifyadmin)
        return "Update Success";
    }

}
