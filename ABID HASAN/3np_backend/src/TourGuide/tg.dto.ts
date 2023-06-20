import {IsNotEmpty, IsString, Matches, IsEmail} from "class-validator";

export class TourGuideRegDTO{
    id : number;
    @IsString({message:"Invalid Name"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
    @IsNotEmpty({message:"Must be Filled!"})
    name: string;

   
    @IsEmail({}, {message:"Invalid Email"})
    @IsNotEmpty({message:"Must be in a valid manner"})
    email:string;
    
    @IsNotEmpty({message:"Must contain a valid password"})
    password: string;

}


export class TourGuideLoginDTO{
    // id:number;
    // name: string;
    // email: string;
    // password: string;
    
    @IsString({message:"Invalid Name"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
    @IsNotEmpty({message:"Must be Filled!"})
    name: string;
 
    @IsNotEmpty({message:"Must contain a valid password"})
    password: string;
}

export class TourGuideUpdateDTO{
    
    @IsString({message:"Invalid Name"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
    @IsNotEmpty({message:"Must be Filled!"})
    name: string;

   
    @IsEmail({}, {message:"Invalid Email"})
    @IsNotEmpty({message:"Must be in a valid manner"})
    email:string;
    
    @IsNotEmpty({message:"Must contain a valid password"})
    password: string;



}

export class CustomerPaymentReceiveDTO{

    id : number;
    @IsString({message:"Invalid Name"})
    @Matches(/^[a-z A-Z]+$/, {message:"Use Valid Name Format"})
    @IsNotEmpty({message:"Must be Filled!"})
    name: string;

   
    @IsEmail({}, {message:"Invalid Email"})
    @IsNotEmpty({message:"Must be in a valid manner"})
    email:string;
    
    contact:number;

}