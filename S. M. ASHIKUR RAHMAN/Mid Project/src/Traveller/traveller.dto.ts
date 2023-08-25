import { IsEmail, IsInt, IsNotEmpty, IsPhoneNumber, IsString, Matches, MaxLength } from "class-validator";

export class TravellerDto {
    id:number;

    @IsString({message: "Invalid Name"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
    @IsNotEmpty({message: "fastName Must be Filled!"})
    @MaxLength(200)
    fastname:string;

    @IsString({message: "Invalid Name"})
    @Matches(/^[a-zA-Z0-9@._$]+$/, {message:"Use Valid name Format"})
    @IsNotEmpty({message: "lasttname Must be Filled!"})
    lastname:string;

    @IsEmail({}, {message: "Invalid E-mail!"})
    @IsNotEmpty({message: "E-mail Must be Filled!"})
    email:string;

    @IsInt({message: "Invalid Contact!"})
    contact:number;

    @IsString({message: "Invalid Password!"})
    @IsNotEmpty({message: "Password Must be Filled!"})
    password:string;
}

export class TravellerLoginDto {
    @IsEmail({}, {message: "Invalid E-mail!"})
    @IsNotEmpty({message: "Email Must be Filled!"})
    email:string;

    @IsString({message: "Invalid Password!"})
    @IsNotEmpty({message: "Password Must be Filled!"})
    password:string;
}

export class DeleteQry {
    tourguidId:number;
    travelerId:number;
}

export class TravellerUpdateDto {
    id:number;
    
    @IsString({message: "Invalid Name"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
    @MaxLength(200)
    name:string;

    @IsEmail({}, {message: "Invalid E-mail!"})
    email:string;

    @IsInt({message: "Invalid Contact!"})
    contact:number;

    @IsString({message: "Invalid Password!"})
    password:string;
}

export class TravellerInfoDto {
    id:number;

    @IsString({message: "Invalid Name"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
    @MaxLength(200)
    name:string;

    @IsEmail({}, {message: "Invalid E-mail!"})
    email:string;

    @IsInt({message: "Invalid Contact!"})
    contact:number;
}

export class travellerMessageDTO {
    @IsString({message: "Invalid Message!"})
    message:string;
}

