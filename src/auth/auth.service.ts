import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";
import { SignInAuthDto } from './dto/sign-in.dto';
import { SignUpAuthDto } from './dto/sign-up.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService
  ) { }

  async signUp(signUpAuthDto: SignUpAuthDto) {
    return this.userService.createUser(signUpAuthDto);
  }

  async signIn(signInAuthDto: SignInAuthDto): Promise<{ accessToken: string }> {
    const user = await this.userService.findByEmail(signInAuthDto.email);

    if (!user) {
      throw new UnauthorizedException();
    }

    const isPasswordEqual = await bcrypt.compare(signInAuthDto.password, user.password);
    if (!isPasswordEqual) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.id,
      email: user.email,
    };
    const token = await this.generateToken(payload);

    return { accessToken: token };
  }

  async generateToken(payload: Record<string, any>) {
    const token = await this.jwtService.signAsync(payload);
    return token;
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);

    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
