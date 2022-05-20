import { UsersRepository } from '../../users/users.repository';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Payload } from '../types/jwt.payload.type';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersRepository: UsersRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET_KEY,
    });
  }

  async validate(payload: Payload) {
    const userId = Number(payload.sub);
    const user = this.usersRepository.findUserById(userId);
    if (!user) {
      throw new UnauthorizedException('잘못된 접근입니다.');
    }
    return user;
  }
}
