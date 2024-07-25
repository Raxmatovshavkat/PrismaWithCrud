import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createTransactionDto: CreateTransactionDto) {
    return await this.prisma.transaction.create({
      data: {
        company_id: createTransactionDto.companyId,
        user_id: createTransactionDto.userId,
        user_data: createTransactionDto.userData,
        car_id: createTransactionDto.carId,
        car_data: createTransactionDto.carData,
        price: createTransactionDto.price,
        start_date: createTransactionDto.startDate,
        end_date: createTransactionDto.endDate,
        status: createTransactionDto.status,
        created_by: createTransactionDto.createdById,
        last_edited_by: createTransactionDto.lastEditedById,
        created_at: new Date(),
        last_edited_at: new Date(),
      },
    });
  }

  async findAll() {
    return this.prisma.transaction.findMany();
  }

  async findOne(id: number) {
    return this.prisma.transaction.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return this.prisma.transaction.update({
      where: { id },
      data: {
        company_id: updateTransactionDto.companyId,
        user_id: updateTransactionDto.userId,
        user_data: updateTransactionDto.userData,
        car_id: updateTransactionDto.carId,
        car_data: updateTransactionDto.carData,
        price: updateTransactionDto.price,
        start_date: updateTransactionDto.startDate,
        end_date: updateTransactionDto.endDate,
        status: updateTransactionDto.status,
        created_by: updateTransactionDto.createdById,
        last_edited_by: updateTransactionDto.lastEditedById,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.transaction.delete({
      where: { id },
    });
  }
}
