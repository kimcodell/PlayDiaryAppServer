import { UserEntity } from '../models/user.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SignupRequestDto } from 'src/common/dto/signup.request.dto';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  // async create(data: SignupRequestDto) {}

  async findUserByEmail(email: string) {
    return this.usersRepository.findOne({
      where: { email },
      select: ['id', 'email', 'password'],
    });
  }

  async findUserById(id: number) {
    return this.usersRepository.findOne({
      where: { id },
      select: [
        'id',
        'email',
        'nickname',
        'introduction',
        'profileImgUrl',
        'registerType',
      ],
    });
  }
}
