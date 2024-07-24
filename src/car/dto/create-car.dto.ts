import { IsString, IsOptional } from 'class-validator';

export class CreateCarDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly modelId: string;

    @IsString()
    readonly companyId: string;

    @IsOptional()
    @IsString()
    readonly info?: string;
}
