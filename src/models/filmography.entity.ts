import { PlayEntity } from './play.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { ActorEntity } from './actor.entity';
import { IsIn, IsString } from 'class-validator';

@Entity({ name: 'filmography' })
export class FilmographyEntity {
  @PrimaryColumn({ type: 'int', name: 'playId' })
  @ManyToOne(() => PlayEntity, (play) => play.filmography)
  play: PlayEntity;

  @PrimaryColumn({ type: 'int', name: 'actorId' })
  @ManyToOne(() => ActorEntity, (actor) => actor.filmography)
  actor: ActorEntity;

  @IsString()
  @Column({ type: 'varchar', nullable: false })
  role: string;

  @IsIn([0, 1])
  @Column({ type: 'tinyint', nullable: false, default: 0 })
  isLeading: 0 | 1;
}
