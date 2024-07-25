import { IsString, IsInt } from 'class-validator';

export class CreateModelDto {
    @IsString()
    readonly name: string;

    @IsInt()
    readonly companyId: number;
}
