import { IsUUID } from 'class-validator';

export class CreateFileDto {
    @IsUUID()
    readonly carId: string;  
}
