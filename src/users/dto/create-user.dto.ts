import { IsEmail, IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';
export class CreateUserDto {
    @IsNotEmpty({message:'Please provide your first name'})
    @IsString()
    firstName:string;

    @IsNotEmpty({message:'Please provide your last name'})
    @IsString()
    lastName:string;

    @IsNotEmpty({message:"Please provide your phone number"})
    @IsString()
    phone:string;

    @IsString()
    address:string;
    @IsString()
    country:string;
    @IsNotEmpty({message:'Please provide Your valid email'})
    @IsEmail()
    email:string;


    @IsString()
    password:string;

    @IsString()
    //match
    confirmPassword:string;

}
