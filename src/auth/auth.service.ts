import { LoginByEmailRequestDto } from './../common/dto/loginByEmail.request.dto';
import { UsersRepository } from '../repositories/users.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  // async signUp() {}

  async loginByEmail(data: LoginByEmailRequestDto) {
    const { email, password } = data;

    const user = await this.usersRepository.findUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해 주세요.');
    }

    const isPasswordValidated: boolean = await bcrypt.compare(
      password,
      user.password,
    );

    if (!isPasswordValidated) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해 주세요.');
    }

    const payload = { email: user.email, sub: user.id };
    return { token: this.jwtService.sign(payload) };
  }
}
