import {IsNotEmpty, IsString, Matches, IsEmail, MaxLength, MinLength, IsInt, isNotEmpty} from "class-validator";
import { LargeNumberLike } from "crypto";
import { FindOperator } from "typeorm";

export class TourGuideRegDTO{

    id:number;

    @IsString({message:"Invalid Name. Name must be in letters"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
    @IsNotEmpty({message:"Must be Filled!"})
    name: string;

   
    @IsEmail({}, {message:"Invalid Email"})
    @IsNotEmpty({message:"Must be in a valid sequence"})
    email:string;
    
    @IsNotEmpty({message:"Must contain a valid password"})
    @MinLength(8,{message:"Password must be at least 8 character"})
    @IsString({message:"Password must be String type"})
    password: string;

    @IsNotEmpty({message:"Please provide your working contact number"})
   // @MinLength(11,{message:"Contact number must be 11 charecter"})
    contact_number:number;

    filename:string;

}
// export class TourGuideRegByManagerDTO{

//     id:number;

//     @IsString({message:"Invalid Name. Name must be in letters"})
//     @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
//     @IsNotEmpty({message:"Must be Filled!"})
//     name: string;

   
//     @IsEmail({}, {message:"Invalid Email"})
//     @IsNotEmpty({message:"Must be in a valid sequence"})
//     email:string;
    
//     @IsNotEmpty({message:"Must contain a valid password"})
//     @MinLength(8,{message:"Password must be at least 8 character"})
//     @IsString({message:"Password must be String type"})
//     password: string;

//     @IsNotEmpty({message:"Please provide your working contact number"})
//    // @MinLength(11,{message:"Contact number must be 11 charecter"})
//     contact_number:number;

//     filename:string;

//     managerId: number;

// }



export class TourGuideLoginDTO{
    //id:number;
    // name: string;
    // email: string;
    // password: string;
    
    @IsString({message:"Invalid Name. Name must be in letters"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
    @IsNotEmpty({message:"Must be Filled!"})
    name: string;

    @IsEmail({}, {message:"Invalid Email"})
    @IsNotEmpty({message:"Must be in a valid sequence"})
    email:string;
 
    @IsNotEmpty({message:"Must contain a valid password"})
    @MinLength(8,{message:"Password must be at least 8 character"})
    password: string;


    
    
}

export class DeleteQry{
    travelerId:number;
}

export class TourGuideUpdateDTO{
    
    id: number ;

    @IsString({message:"Invalid Name. Name must be in letters"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
    @IsNotEmpty({message:"Must be Filled"})
    name: string;

   
    @IsEmail({}, {message:"Must be in a valid manner"})
    @IsNotEmpty({message:"Email Must be Filled"})
    email:string;
    
    @IsNotEmpty({message:"Must contain a valid password"})
    @MinLength(8,{message:"Password must be at least 8 character"})
    @IsString({message:"Password must be String type"})
    password: string;
    
    @IsNotEmpty({message:"Please provide your working contact number"})
    //@MinLength(11,{message:"Contact number must be 11 charecter"})
    contact_number:number;

    filename:string;


}


export class PaymentReceiveDTO{

    id : number;
    @IsString({message:"Name must be a string type"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
    @IsNotEmpty({message:"Must be Filled!"})
    name: string;

   
    @IsEmail({}, {message:"Invalid Email"})
    @IsNotEmpty({message:"Must be in a valid manner"})
    email:string;
   
    @IsNotEmpty({message:"Please provide correct contact number"})
    contact_number:number;

    @IsNotEmpty({message:"Must Be Filled"})
    @IsString({message:"Invalid Location"})
    location:string;

    @IsNotEmpty({message:"Please Enter a amount"})
    amount:number;
    
    
    tourguideID: number;

}

export class CreateTourPackDTO{
    
    id:number;
    @IsString({message:"Name must be a string type"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
    @IsNotEmpty({message:"Must be Filled!"})
    name:string;
    
    @IsNotEmpty()
    @IsString({message:"provide the start destination"})
    startdestination:string;
    
    @IsNotEmpty()
    @IsString({message:"provide the end destination"})
    enddestination:string;
    

    @IsNotEmpty({message:"Number of staying duration please"})
    totalduration:number;

    @IsNotEmpty()
    totalamount:number;
    
    tourguideID:number;


}

export class TourgudieMessageDTO{
    @IsString({message:"Invalid Message"})
    @IsNotEmpty({message:"Receiver Must be Filled"})
    receiver:string;

    @IsString({message:"Invalid Subject"})
    @IsNotEmpty({message:"Subject Must be Filled"})
    subject:string;


    @IsString({message:"Invalid Message"})
    message:string;
    
}


export class HotelandVehicleDTO{
    id:number;
    
    @IsNotEmpty()
    @IsString({message:"provide the hotel name"})
    hotelname:string;
    
    @IsNotEmpty()
    @IsString({message:"provide the hotel type"})
    hoteltype:string;
    
    @IsNotEmpty()
    @IsString({message:"where is the hotel location"})
    hotellocation:string;
   
    @IsNotEmpty({message:"How many days you want to stay"})
    stayamount:number;

    @IsNotEmpty()
    @IsString({message:"provide the vehicle name"})
    vehiclename:string;
    
    @IsNotEmpty()
    @IsString({message:"provide the vehicle type"})
    vehicletype:string;
    
    @IsNotEmpty()
    @IsString({message:"where do you want to start"})
    startdestination:string;
    
    @IsNotEmpty()
    @IsString({message:"what is your end destination"})
    Enddestination:string;
    
    @IsNotEmpty({message:"total fee of bus"})
    travelamount:number;

    tourguideID:number;


}