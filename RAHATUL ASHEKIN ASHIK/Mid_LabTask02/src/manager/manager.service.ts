import { Injectable } from "@nestjs/common";
import { Console } from "console";
import { HotelRegDTO, ManagerLoginDTO, ManagerRegDTO, ManagerUpdatebyIdDTO, ManagerUpdateDTO, TourGuideDTO, VehicleRegDTO } from "./manager.dto";

@Injectable()
export class ManagerService {
    regManager(managerRegInfo:ManagerRegDTO) : string {
        console.log(managerRegInfo);
        return "Manager Registration Successful!";
        //return managerRegInfo;
    }

    loginManager(managerLoginInfo:ManagerLoginDTO) : string {
        console.log(managerLoginInfo)
        return "Manager Login Successful!";
        //return managerLoginInfo;
    }

    getTravelerInfo() : object {
        return ({id:1013, name:"Badhon Sutradhar", username:"badhon_sutradhar", email:"badhon.su@gmail.com", contact:1111111111, age:23, location:"dhaka", profession:"student"});
    }

    getTravelerInfobyID(id:number) {
        return ({id, name:"Tanisha Ahmed", username:"tanisha_ahmend", email:"tanisha@gmail.com", contact:2222222222, age:31, location:"sylhet", profession:"accountant"});
    }

    getTourGuideInfo() : object {
        return ({id:2012, name:"Tanvirul Haq", username:"tanvir_haq", email:"h.tanvirul@yahoo.com", contact:3333333333, age:35, location:"bandorban"});
    }

    getTourGuideInfobyNameandLocation(tg_qry:TourGuideDTO) : object {
        return ({id:2009, name:tg_qry.name, username:"mohammad", email:"mohammad@yahoo.com", contact:4444444444, age:22, location:tg_qry.location});
    }

    modifyManager(mod_mgr:ManagerUpdateDTO) : string {
        console.log(mod_mgr);
        return "Manager Update Successful!";
    }

    modifyManagerbyID(id:number, mod_mgr_id:ManagerUpdatebyIdDTO) : string {
        console.log(id);
        console.log(mod_mgr_id);
        return "Specified ID Manager Update Successful!"
    }

    deleteManagerbyID(id:number) : string {
        return "Manager Delete Successful!";
    }

    regHotel(hotelInfo:HotelRegDTO) : string {
        console.log(hotelInfo);
        return "Hotel Registration Successful!";
    }

    regVehicle(vehicleInfo:VehicleRegDTO) : string {
        console.log(vehicleInfo);
        return "Vehicle Registration Successful!"
    }
}