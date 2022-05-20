import { UserEntity } from '../models/user.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SignupRequestDto } from 'src/common/dto/signup.request.dto';
import { FollowEntity } from 'src/models/follow.entity';
import { WantPlayEntity } from 'src/models/wantPlay.entity';
import { RatingEntity } from 'src/models/rating.entity';
import { ReviewEntity } from 'src/models/review.entity';

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

  async findUserInfoById(id: number) {
    return await this.usersRepository
      .createQueryBuilder()
      .select(['id', 'email', 'nickname', 'introduction', 'profileImgUrl'])
      .addSelect(
        (subQuery) =>
          subQuery
            .select('COUNT(*)')
            .from(FollowEntity, 'follow')
            .where('followingId = :id'),
        'followers',
      )
      .addSelect(
        (subQuery) =>
          subQuery
            .select('COUNT(*)')
            .from(FollowEntity, 'follow')
            .where('followerId = :id'),
        'followings',
      )
      .addSelect(
        (subQuery) =>
          subQuery
            .select('COUNT(*)')
            .from(WantPlayEntity, 'want_play')
            .where('userId = :id'),
        'wantPlayCounts',
      )
      .addSelect(
        (subQuery) =>
          subQuery
            .select('COUNT(*)')
            .from(RatingEntity, 'rating')
            .where('userId = :id'),
        'ratingCounts',
      )
      .addSelect(
        (subQuery) =>
          subQuery
            .select('COUNT(*)')
            .from(ReviewEntity, 'review')
            .where('userId = :id'),
        'reveiwCounts',
      )
      .where('id = :id')
      .setParameter('id', id)
      .execute();
  }
}
