import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CarService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createCarDto: CreateCarDto) {
    return await this.prisma.car.create({
      data: {
        name: createCarDto.name,
        model_id: Number(createCarDto.modelId),
        company_id: Number(createCarDto.companyId),
        info: createCarDto.info || '', 
      }
    });
  }

  async findAll() {
    return this.prisma.car.findMany();
  }

  async findOne(id: number) {
    return this.prisma.car.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    return this.prisma.car.update({
      where: { id },
      data: updateCarDto,
    });
  }

  async remove(id: number) {
    return this.prisma.car.delete({
      where: { id },
    });
  }
}
