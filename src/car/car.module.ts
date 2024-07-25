import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports:[PrismaService],
  controllers: [CarController],
  providers: [CarService,PrismaService],
})
export class CarModule {}
