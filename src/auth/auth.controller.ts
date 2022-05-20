import { Body, Controller, Post } from '@nestjs/common';
import { LoginByEmailRequestDto } from 'src/common/dto/loginByEmail.request.dto';
import { SignupRequestDto } from 'src/common/dto/signup.request.dto';
import { AuthService } from './auth.service';

//TODO 파이프 추가
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() data: SignupRequestDto) {
    return data;
  }

  @Post('email')
  loginByEmail(@Body() data: LoginByEmailRequestDto) {
    return this.authService.loginByEmail(data);
  }

  @Post('naver')
  loginByNaver(@Body('accessToken') accessToken: string) {
    return accessToken; //TODO
  }
}
