import { FollowRepository } from './../repositories/follow.repository';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly followRepository: FollowRepository,
  ) {}

  async getUserInfo(userId: Express.User) {
    return this.usersRepository.findUserInfoById(userId as number);
  }

  async followUser(followerId: number, followingId: number) {
    const follower = await this.usersRepository.findSimpleUserById(followerId);
    const following = await this.usersRepository.findSimpleUserById(
      followingId,
    );
    if (!following) {
      throw new HttpException(
        '팔로우 하려는 사용자가 존재하지 않습니다.',
        HttpStatus.FORBIDDEN,
      );
    }
    return await this.followRepository.follow(follower, following);
  }
}
