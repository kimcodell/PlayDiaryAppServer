import { UserEntity } from './user.entity';
import { CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { IsDate } from 'class-validator';

@Entity({ name: 'follow' })
export class FollowEntity {
  @PrimaryColumn({ type: 'int', name: 'followerId' })
  @ManyToOne(() => UserEntity, (user) => user.follower)
  follower: UserEntity;

  @PrimaryColumn({ type: 'int', name: 'followingId' })
  @ManyToOne(() => UserEntity, (user) => user.follower)
  following: UserEntity;

  @IsDate()
  @CreateDateColumn({ type: 'timestamp', nullable: false })
  createdAt: Date;
}
