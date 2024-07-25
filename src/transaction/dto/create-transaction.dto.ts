import { IsString, IsInt, IsEnum, IsJSON, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { Status } from '@prisma/client';

export class CreateTransactionDto {
    @IsInt()
    readonly companyId: number;

    @IsInt()
    readonly userId: number;

    @IsJSON()
    readonly userData: any;

    @IsInt()
    readonly carId: number;

    @IsJSON()
    readonly carData: any;

    @IsInt()
    readonly price: number;

    @IsDate()
    @Type(() => Date)
    readonly startDate: Date;

    @IsDate()
    @Type(() => Date)
    readonly endDate: Date;

    @IsEnum(Status)
    readonly status: Status;

    @IsInt()
    readonly createdById: number;

    @IsInt()
    readonly lastEditedById: number;
}
