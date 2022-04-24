import { UserEntity } from './user.entity';
import { CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { ActorEntity } from './actor.entity';
import { IsDate } from 'class-validator';

@Entity({ name: 'liked_actor' })
export class LikedActorEntity {
  @PrimaryColumn({ type: 'int', name: 'userId' })
  @ManyToOne(() => UserEntity, (user) => user.likedActor)
  user: UserEntity;

  @PrimaryColumn({ type: 'int', name: 'actorId' })
  @ManyToOne(() => UserEntity, (actor) => actor.likedActor)
  actor: ActorEntity;

  @IsDate()
  @CreateDateColumn()
  createdAt: Date;
}
