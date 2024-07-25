import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ModelModule } from './model/model.module';
import { CompanyModule } from './company/company.module';
import { FileModule } from './file/file.module';
import { CarModule } from './car/car.module';
import { TransactionModule } from './transaction/transaction.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { PrismaService } from '../prisma/prisma.service';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [ThrottlerModule.forRoot([{
    ttl: 60,
    limit: 10,
  }]), UserModule, ModelModule, CompanyModule, FileModule, CarModule, TransactionModule, AuthModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
