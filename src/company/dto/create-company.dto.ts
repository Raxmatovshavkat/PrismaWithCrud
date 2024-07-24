import { IsString, IsEnum, IsOptional } from 'class-validator';
import { Role } from '@prisma/client';

export class CreateCompanyDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly logo: string;

    @IsString()
    readonly ownerId: string;
}
