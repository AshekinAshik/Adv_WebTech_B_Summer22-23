import { IsEmail, IsInt, IsNotEmpty, IsString, Matches, MaxLength, MinLength, isNotEmpty,  } from "class-validator";


export class TravellerRegDTO{

    id:number;

    @IsString({message: "Invalid Name"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
    @IsNotEmpty({message:"Must be Filled"})
    @MaxLength(200)
    name:string;

    @IsString({message: "Invalid Name"})
    @Matches(/^[a-zA-Z0-9@._$]+$/, {message:"Use Valid Username Format"})
    username:string;

    @IsEmail({}, {message: "Must be in a valid manner"})
    @IsNotEmpty({message:"Email Must be Filled"})
    email:string;

    @IsNotEmpty({message:"Please provide your working contact number"})
    //@MinLength(9,{message:"Contact number must be 11 charecter"})
    contact_number:number;

    @IsInt({message: "Invalid Age."})
    age:number;

    @IsString({message: "Invalid Gender."})
    gender:string;
    
    @IsString({message: "Invalid Name!"})
    profession:string;

    tourguideID:number;

    
}