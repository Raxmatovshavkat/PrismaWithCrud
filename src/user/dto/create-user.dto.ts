import { IsString, IsEnum } from 'class-validator';
import { Role } from '@prisma/client';

export class CreateUserDto {
    @IsString()
    readonly phone: string;

    @IsString()
    readonly full_name: string;

    @IsString()
    readonly avatar: string;

    @IsEnum(Role)
    readonly role: Role;
}
