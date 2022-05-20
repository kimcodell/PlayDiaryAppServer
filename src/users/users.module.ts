import { UsersRepository } from '../repositories/users.repository';
import { UserEntity } from './../models/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { FollowRepository } from 'src/repositories/follow.repository';
import { FollowEntity } from 'src/models/follow.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, FollowEntity])],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, FollowRepository],
  exports: [UsersRepository],
})
export class UsersModule {}
