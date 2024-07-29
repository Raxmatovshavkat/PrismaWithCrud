import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInAuthDto } from "./dto";
import { SignUpAuthDto } from './dto/sign-up.dto';
import { JwtAuthGuard } from "./guard/jwt.guard";
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

interface Request { user: any }

@ApiTags('auth')
@ApiBearerAuth()
@Controller('auth')

export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @Post('signup')
  singup(@Body() singUpAuthDto: SignUpAuthDto) {
    return this.authService.signUp(singUpAuthDto);
  }

  @Post('signin')
  singin(@Body() singInAuthDto: SignInAuthDto) {
    return this.authService.signIn(singInAuthDto);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  getme(@Req() req: Request) {
    return req.user
  }

  


}