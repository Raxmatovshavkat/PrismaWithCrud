import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';

@Injectable()
export class ModelService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createModelDto: CreateModelDto) {
    return await this.prisma.model.create({
      data: {
        name: createModelDto.name,
        company_id: createModelDto.companyId,
        created_at: new Date(),
        last_edited_at: new Date(),
      },
    });
  }

  async findAll() {
    return this.prisma.model.findMany();
  }

  async findOne(id: number) {
    return this.prisma.model.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateModelDto: UpdateModelDto) {
    return this.prisma.model.update({
      where: { id },
      data: updateModelDto,
    });
  }

  async remove(id: number) {
    return this.prisma.model.delete({
      where: { id },
    });
  }
}
