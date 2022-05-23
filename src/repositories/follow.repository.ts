import { UserEntity } from './../models/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FollowEntity } from 'src/models/follow.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FollowRepository {
  constructor(
    @InjectRepository(FollowEntity)
    private readonly followRepository: Repository<FollowEntity>,
  ) {}

  //NOTE followerId가 followingId를 팔로우
  async follow(followerUser: UserEntity, followingUser: UserEntity) {
    const followData = new FollowEntity();
    followData.follower = followerUser;
    followData.following = followingUser;
    const isAlreadyFollow = await this.followRepository
      .createQueryBuilder()
      .select()
      .where('followerId = :followerId')
      .andWhere('followingId = :followingId')
      .setParameters({
        followerId: followerUser.id,
        followingId: followingUser.id,
      })
      .getOne();
    if (!!isAlreadyFollow) {
      await this.followRepository.delete(followData);
      delete isAlreadyFollow.createdAt;
      return { ...isAlreadyFollow, deletedAt: new Date().toISOString() };
      // throw new HttpException(
      //   '이미 팔로우하고 있습니다.',
      //   HttpStatus.FORBIDDEN,
      // );
    }
    return await this.followRepository.save(followData);
  }
}
