import { PlayEntity } from './play.entity';
import { UserEntity } from './user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsDate, IsInt, IsNumber, IsPositive } from 'class-validator';

@Entity({ name: 'rating' })
export class RatingEntity {
  @PrimaryColumn({ type: 'int', name: 'userId' })
  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @PrimaryColumn({ type: 'int', name: 'playId' })
  @ManyToOne(() => PlayEntity)
  play: PlayEntity;

  @IsPositive()
  @IsInt()
  @PrimaryColumn()
  viewNumber: number;

  @IsPositive()
  @IsNumber()
  @Column({ type: 'float', nullable: false })
  rate: number;

  @IsDate()
  @CreateDateColumn()
  createdAt: Date;

  @IsDate()
  @UpdateDateColumn()
  updatedAt: Date;
}
