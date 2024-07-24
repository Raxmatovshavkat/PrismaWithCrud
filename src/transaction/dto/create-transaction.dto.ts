import { IsString, IsInt, IsEnum, IsJSON } from 'class-validator';
import { TransactionStatus } from '@prisma/client';


export class CreateTransactionDto {
    @IsString()
    readonly companyId: string;

    @IsString()
    readonly userId: string;

    @IsJSON()
    readonly userData: any;

    @IsString()
    readonly carId: string;

    @IsJSON()
    readonly carData: any;

    @IsInt()
    readonly price: number;

    @IsString()
    readonly startDate: Date;

    @IsString()
    readonly endDate: Date;

    @IsEnum(TransactionStatus)
    readonly status: TransactionStatus;

    @IsString()
    readonly createdById: string;

    @IsString()
    readonly lastEditedById: string;
}
