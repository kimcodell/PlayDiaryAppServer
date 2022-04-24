import { IsNumber, IsString } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FilmographyEntity } from './filmography.entity';
import { LikedActorEntity } from './likedActor.entity';

@Entity({ name: 'actor' })
export class ActorEntity {
  @IsNumber()
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column({ type: 'varchar', nullable: false })
  name: string;

  @OneToMany(() => FilmographyEntity, (filmo) => filmo.actor)
  filmography: FilmographyEntity[];

  @OneToMany(() => LikedActorEntity, (likedActor) => likedActor.actor)
  likedActor: LikedActorEntity[];
}
