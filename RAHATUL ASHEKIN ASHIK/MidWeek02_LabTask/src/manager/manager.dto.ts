import { IsEmail, IsInt, IsNotEmpty, IsString, Matches } from "class-validator";

export class ManagerRegDTO {
    id:number;

    @IsString({message:"Invalid Name"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
    @IsNotEmpty({message:"Must be Filled!"})
    name:string;

    @IsString({message:"Invalid Username"})
    @Matches(/^[a-z A-Z 0-9 @ . _ $]+$/, {message:"Use Valid Username Format"})
    @IsNotEmpty({message:"Must be Filled!"})
    username:string;

    @IsEmail({}, {message:"Invalid Email"})
    @IsNotEmpty({message:"Must be Filled!"})
    email:string;

    @IsNotEmpty({message:"Must be Filled!"})
    password:string;
    
    @IsInt({message:"Invalid Number"})
    contact:number;
}

export class ManagerLoginDTO {
    @IsString({message:"Invalid Username"})
    @Matches(/^[a-z A-Z 0-9 @ . _ $]+$/, {message:"Use Valid Username Format"})
    @IsNotEmpty({message:"Must be Filled!"})
    username:string;

    @IsString({message:"Invalid Name"})
    @IsNotEmpty({message:"Must be Filled!"})
    password:string;
}

export class TravelerDTO {
    @IsString({message:"Invalid Name"})
    @Matches(/^[a-z A-Z 0-9 @ . _]+$/, {message:"Use Valid Username Format"})
    username:string;

    @IsString({message:"Invalid Name"})
    password:string;
}

export class TourGuideDTO {
    // @IsNotEmpty({message:"Must be Filled!"})
    // id:number;

    // @IsString({message:"Invalid Name"})
    // @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
    // name:string;

    // @IsString({message:"Invalid Name"})
    // @Matches(/^[a-z A-Z 0-9 @ . _ $]+$/, {message:"Use Valid Name Format"})
    // @IsNotEmpty({message:"Must be Filled!"})
    // username:string;

    // @IsEmail({}, {message:"Invalid Email"})
    // email:string;

    // @IsInt({message:"Invalid Contact"})
    // contact:number;

    // @IsInt({message:"Invalid Age"})
    // age:number;

    // @IsString({message:"Invalid Location"})
    // @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Location Format"})
    // location:string;

    @IsString({message:"Invalid Name"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
    name:string;

    @IsString({message:"Invalid Location"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Location Format"})
    location:string;
}

export class ManagerUpdateDTO {
    @IsString({message:"Invalid Name"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
    @IsNotEmpty({message:"Must be Filled!"})
    name:string;

    @IsEmail({}, {message:"Invalid Email"})
    @IsNotEmpty({message:"Must be Filled!"})
    email:string;

    @IsNotEmpty({message:"Must be Filled!"})
    password:string;
    
    contact:number;
}

export class ManagerUpdatebyIdDTO {
    id:number;

    @IsString({message:"Invalid Name"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
    @IsNotEmpty({message:"Must be Filled!"})
    name:string;

    @IsEmail({}, {message:"Invalid Email"})
    @IsNotEmpty({message:"Must be Filled!"})
    email:string;

    @IsNotEmpty({message:"Must be Filled!"})
    password:string;
    
    contact:number;
}

export class HotelRegDTO {
    id:number;

    @IsString({message:"Invalide Hotel Name"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Hotel Name Format"})
    @IsNotEmpty({message:"Must be Filled"})
    name:string;

    @IsEmail({}, {message:"Invalid Hotel Email"})
    email:string;

    @IsInt({message:"Invalid Hotel Contact"})
    @IsNotEmpty({message:"Must be Filled!"})
    contact:number;

    @IsString({message:"Invalid Hotel Location"})
    @IsNotEmpty({message:"Must be Filled!"})
    location:string;
}

export class VehicleRegDTO {
    id:number;

    @IsString({message:"Invalide Company Name Type"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Company Name Format"})
    @IsNotEmpty({message:"Must be Filled"})
    company_name:string;

    @IsString({message:"Invalide Vehicle Type"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Vehicle Type Format"})
    @IsNotEmpty({message:"Must be Filled"})
    type:string;

    @IsString({message:"Invalide Registration NO"})
    @Matches(/^[a-z A-Z 0-9]+$/, {message:"Use Valid Registration NO Format"})
    @IsNotEmpty({message:"Must be Filled"})
    reg_no:string;

    @IsInt({message:"Invalid Hotel Contact"})
    @IsNotEmpty({message:"Must be Filled!"})
    contact:number;

    @IsString({message:"Invalid Hotel Location"})
    @IsNotEmpty({message:"Must be Filled!"})
    location:string;
}