import { IsString ,IsStrongPassword,IsNumber,IsEmail, IsEmpty, IsNotEmpty, Matches, MaxLength} from "class-validator";


export class AdminDtoReg{
    
    //Name
    @IsString()
    @Matches( /^[a-zA-Z]+$/, {message:"Enter a Valid Name"})
    
    @IsNotEmpty({message :"Please Enter Name"})
    Name : string;

    //Email Validaton 
    @IsEmail()
    
    @IsNotEmpty({message :"Please Enter Email"})
    Email : string;

    //Number Validaton
    @IsNumber()
    
    @IsNotEmpty({message :"Please Enter Number"})
    Number : number;

    //Password Validaton
    @IsString()
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,64}$/gm, {
        message:'Password must be between 6 and 64 characters long with 1 special character and capital character each',})
    @IsNotEmpty({message :"Please Enter Password"})
    Password : string

}
//Log in validation
export class AdminLogin{
    @IsString()
    @Matches(/^[a-zA-Z0-9@._]+$/, {message:"Can not use Space"})
    @IsNotEmpty({message: "User name can not Empty"})
    Useranme:String

    @IsStrongPassword()
    @IsNotEmpty({message:"Password can not Empty"})
    Password:String

}

export class AdminModifyDto{
    
    //Name
    @IsString()
    @Matches( /^[a-zA-Z]+$/, {message:"Enter a Valid Name"})
    
    @IsNotEmpty({message :"Please Enter Name"})
    Name : string;

    //Email Validaton 
    @IsEmail()
    
    @IsNotEmpty({message :"Please Enter Email"})
    Email : string;

    //Number Validaton
    @IsNumber()
    
    @IsNotEmpty({message :"Please Enter Number"})
    Number : number;

    //Password Validaton
    @IsString()
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,64}$/gm, {
        message:'Password must be between 6 and 64 characters long with 1 special character and capital character each',})
    @IsNotEmpty({message :"Please Enter Password"})
    Password : string

}


