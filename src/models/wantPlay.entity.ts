import { CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { PlayEntity } from './play.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'want_play' })
export class WantPlayEntity {
  @PrimaryColumn({ type: 'int', name: 'userId' })
  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @PrimaryColumn({ type: 'int', name: 'playId' })
  @ManyToOne(() => PlayEntity)
  play: PlayEntity;

  @CreateDateColumn()
  createdAt: Date;
}
