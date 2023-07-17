import { Injectable } from "@nestjs/common";
import { Console } from "console";
import { TourGuideRegDTO, TourGuideLoginDTO, TourGuideUpdateDTO, CustomerPaymentReceiveDTO } from "./tg.dto";




@Injectable()
export class TourGuideService{
    
    
    regTourGuide(tourguideRegInfo: TourGuideRegDTO): string {
        return "Congratulatuion TourGuide Registration Successful";
    }
    
    loginTourGuide(tourguideLoginInfo: TourGuideLoginDTO): string {
        return "Login Successfully done";
    }

    
    getHotelInfo(): object {
        return({name:"THE TAJ HOTEL", location:"India"});    
    }
    
    getVehicleInfo(): object {
        return({name:"HUNDAI G67", brand:"HUNDAI", class:"SLEEPER COUCH"});    
    }

    updateTourGuide(tourguideupdate: TourGuideUpdateDTO): string {
        return "Tourguide updated successfully 😊";
    }
    getTravelerInfoByID(id:number) :object
    {
        return({id , name:"ABID HASAN", email:"xyz@gmail.com" })
    }

    deleteTourGuideByID(id: number): string {
        console.log(id);
        return"Tourguide Deleted Successfully";
    }

    receivePaymentByID(paymentreceive: CustomerPaymentReceiveDTO): string {
        return "Payment received Successfully";
    }


    

    

    

}