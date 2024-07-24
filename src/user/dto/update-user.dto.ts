import { IsString, IsOptional, IsEnum } from 'class-validator';
import { Role } from '@prisma/client';

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    readonly phone?: string;

    @IsOptional()
    @IsString()
    readonly full_name?: string;

    @IsOptional()
    @IsString()
    readonly avatar?: string;

    @IsOptional()
    @IsEnum(Role)
    readonly role?: Role;
}
