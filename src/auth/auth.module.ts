import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { PrismaService } from '../../prisma/prisma.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [JwtModule.register({ secret: 'your-secret-key' }),
    UserModule,
    PassportModule
  ],
  providers: [AuthService, UserService, PrismaService,LocalStrategy],
  exports: [AuthService],
  controllers:[AuthController]
})
export class AuthModule { }
