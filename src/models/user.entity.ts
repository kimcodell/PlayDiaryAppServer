import {
  IsDate,
  IsEmail,
  IsIn,
  IsNumber,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { FollowEntity } from './follow.entity';
import { LikedActorEntity } from './likedActor.entity';
import { RatingEntity } from './rating.entity';
import { ReservationEntity } from './reservation.entity';
import { WantPlayEntity } from './wantPlay.entity';
import { ReviewEntity } from './review.entity';

@Entity({ name: 'user' })
export class UserEntity {
  @IsNumber()
  @PrimaryGeneratedColumn()
  id: number;

  @IsEmail({}, { message: '올바른 이메일 형식이 아닙니다.' })
  @Column({ type: 'varchar', unique: true, nullable: false, length: 100 })
  email: string;

  @IsString()
  @Column({ type: 'varchar', nullable: true, length: 200 })
  password: string;

  @IsString()
  @MaxLength(20, { message: '닉네임은 20자 이하로 작성해주세요.' })
  @Column({ type: 'varchar', nullable: false, length: 50 })
  nickname: string;

  @IsString()
  @MaxLength(60, { message: '소개는 60자 이하로 작성해주세요.' })
  @Column({ type: 'varchar', nullable: true, length: 200 })
  introduction: string;

  @IsIn([1, 2])
  @Column({ type: 'tinyint', nullable: false })
  registerType: 1 | 2; //1: email, 2: naver

  @IsUrl()
  @Column({ type: 'varchar', nullable: true, length: 300 })
  profileImgUrl: string;

  @IsDate()
  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt: Date;

  @IsDate()
  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updatedAt: Date;

  @IsDate()
  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => FollowEntity, (follow) => follow.follower)
  follower: FollowEntity[];

  @OneToMany(() => FollowEntity, (follow) => follow.following)
  following: FollowEntity[];

  @OneToMany(() => LikedActorEntity, (likedActor) => likedActor.user)
  likedActor: LikedActorEntity[];

  @OneToMany(() => ReservationEntity, (reservation) => reservation.user)
  reservation: ReservationEntity[];

  @OneToMany(() => WantPlayEntity, (wantPlay) => wantPlay.user)
  wantPlay: WantPlayEntity[];

  @OneToMany(() => RatingEntity, (rating) => rating.user)
  rating: RatingEntity[];

  @OneToMany(() => ReviewEntity, (review) => review.user)
  review: ReviewEntity[];
}
