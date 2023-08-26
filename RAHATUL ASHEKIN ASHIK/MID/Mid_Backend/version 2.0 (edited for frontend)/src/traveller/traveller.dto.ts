import { IsEmail, IsInt, IsNotEmpty, IsString, Matches, MaxLength } from "class-validator";

export class TravellerRegDTO {
    id:number;
    
    @IsString({message: "Invalid Name"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
    @MaxLength(200)
    name:string;

    @IsString({message: "Invalid Name"})
    @Matches(/^[a-zA-Z0-9@._$]+$/, {message:"Use Valid Username Format"})
    username:string;

    @IsEmail({}, {message: "Invalid E-mail!"})
    email:string;

    @IsInt({message: "Invalid Contact!"})
    contact:number;

    @IsInt({message: "Invalid Age!"})
    age:number;

    @IsString({message: "Invalid Gender!"})
    gender:string;

    @IsString({message: "Invalid Name!"})
    profession:string;

    managerID:number;
}

export class TravellerUpdateDTO {
    id: number;
    
    @IsString({message: "Invalid Name"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
    @MaxLength(200)
    name:string;

    @IsEmail({}, {message: "Invalid E-mail!"})
    email:string;

    @IsInt({message: "Invalid Contact!"})
    contact:number;

    @IsInt({message: "Invalid Age!"})
    age:number;

    @IsString({message: "Invalid Name!"})
    profession:string;    
}

export class TravellerTourGuideDTO {
    id:number; //Traveller ID
    tourGuideId:number;
}