import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [JwtModule.register({ secret: 'your-secret-key' })],
  providers: [AuthService, UserService, PrismaService],
  exports: [AuthService],
})
export class AuthModule { }
