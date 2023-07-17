import { IsEmail, IsInt, IsNotEmpty, IsPhoneNumber, IsString, Matches, MaxLength } from "class-validator";

export class ManagerRegDTO {
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
    contact:number;

    @IsString({message: "Invalid Password!"})
    @IsNotEmpty({message: "Password Must be Filled!"})
    password:string;
}

export class ManagerLoginDTO {
    @IsString({message: "Invalid Name"})
    @Matches(/^[a-zA-Z0-9@._$]+$/, {message:"Use Valid Username Format"})
    @IsNotEmpty({message: "Username Must be Filled!"})
    username:string;

    @IsString({message: "Invalid Password!"})
    @IsNotEmpty({message: "Password Must be Filled!"})
    password:string;
}

export class DeleteQry {
    managerId:number;
    travelerId:number;
}

export class ManagerUpdateDTO {
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

export class ManagerInfoDTO {
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

export class ManagerMessageDTO {
    @IsString({message: "Invalid Message!"})
    message:string;
}

export class addManagerToTourGuideDTO {
    managerId: number;
    tourguideId: number;
}

export class HotelDetailsDTO {
    id:number;
    
    @IsString({message: "Invalid Name"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
    @MaxLength(200)
    @IsNotEmpty({message: "Name Must be Filled!"})
    name:string;

    @IsEmail({}, {message: "Invalid E-mail!"})
    @IsNotEmpty({message: "E-mail Must be Filled!"})
    email:string;

    @IsInt({message: "Invalid Contact!"})
    @IsNotEmpty({message: "Contact Must be Filled!"})
    contact:number;

    @IsString({message: "Invalid Location"})
    @IsNotEmpty({message: "Location Must be Filled!"})
    location:string;

    managerId:number;
}