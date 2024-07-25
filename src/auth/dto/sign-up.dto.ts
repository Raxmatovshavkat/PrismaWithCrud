import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, IsEnum } from "class-validator";
import { Role } from '@prisma/client'; 

export class SignUpAuthDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    full_name: string; 

    @IsNotEmpty()
    @IsStrongPassword()
    password: string;

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsNotEmpty()
    @IsString()
    avatar: string;

    @IsNotEmpty()
    @IsEnum(Role)
    role: Role; 
}
