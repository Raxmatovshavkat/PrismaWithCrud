import { IsString } from 'class-validator';

export class CreateModelDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly companyId: string;
}
