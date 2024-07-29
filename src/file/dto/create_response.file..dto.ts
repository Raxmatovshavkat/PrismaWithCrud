import { IsString, IsUUID, IsInt } from 'class-validator';

export class FileResponseDto {
    @IsUUID()
    readonly id: string;

    @IsString()
    readonly url: string;

    @IsString()
    readonly mimetype: string;

    @IsInt()
    readonly size: number;

    @IsUUID()
    readonly carId: string;  // Assuming 'car_id' as a foreign key

    readonly createdAt: Date;

    readonly lastEditedAt: Date;
}
