import { IsEmail, IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';
import { Match } from '../password.match';
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

    @IsNotEmpty()
    @IsString()
    password:string;

    @IsNotEmpty()
    @IsString()
    @Match('password')
    confirmPassword:string;

}
