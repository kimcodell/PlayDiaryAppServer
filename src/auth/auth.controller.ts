import { Body, Controller, Post } from '@nestjs/common';
import { LoginByEmailRequestDto } from 'src/common/dto/loginByEmail.request.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('email')
  loginByEmail(@Body() data: LoginByEmailRequestDto) {
    return this.authService.loginByEmail(data);
  }
}
