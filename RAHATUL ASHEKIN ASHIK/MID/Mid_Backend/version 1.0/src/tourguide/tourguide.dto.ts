import { IsEmail, IsInt, IsNotEmpty, IsString, Matches, MaxLength } from "class-validator";

export class TourGuideRegDTO {
    id:number;

    @IsString({message: "Invalid Name"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
    @IsNotEmpty({message: "Name Must be Filled!"})
    @MaxLength(200)
    name:string;

    @IsString({message: "Invalid Name"})
    @Matches(/^[a-zA-Z0-9@._$]+$/, {message:"Use Valid Username Format"})
    @IsNotEmpty({message: "Username Must be Filled!"})
    username:string;

    @IsEmail({}, {message: "Invalid E-mail!"})
    @IsNotEmpty({message: "E-mail Must be Filled!"})
    email:string;

    @IsInt({message: "Invalid Contact!"})
    @IsNotEmpty({message: "Contact Must be Filled!"})
    contact:number;

    @IsInt({message: "Invalid Age!"})
    age:number;

    @IsString({message: "Invalid Location"})
    @IsNotEmpty({message: "Location Must be Filled!"})
    location:string;

    @IsString({message: "Invalid Password!"})
    @IsNotEmpty({message: "Password Must be Filled!"})
    password:string;
}

export class TourGuideUpdateDTO {
    id:number;

    @IsString({message: "Invalid Name"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
    @IsNotEmpty({message: "Name Must be Filled!"})
    @MaxLength(200)
    name:string;

    @IsEmail({}, {message: "Invalid E-mail!"})
    @IsNotEmpty({message: "E-mail Must be Filled!"})
    email:string;

    @IsInt({message: "Invalid Contact!"})
    @IsNotEmpty({message: "Contact Must be Filled!"})
    contact:number;

    @IsInt({message: "Invalid Age!"})
    age:number;

    @IsString({message: "Invalid Location"})
    @IsNotEmpty({message: "Location Must be Filled!"})
    location:string;
}