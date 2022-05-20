import { PlayEntity } from './play.entity';
import { UserEntity } from './user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsDate, IsInt, IsNumber, IsPositive } from 'class-validator';

@Entity({ name: 'rating' })
export class RatingEntity {
  @IsNumber()
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, { nullable: false })
  user: UserEntity;

  @ManyToOne(() => PlayEntity, { nullable: false })
  play: PlayEntity;

  @IsPositive()
  @IsInt()
  @Column({ type: 'int', nullable: false, default: 1 })
  viewNumber: number;

  @IsPositive()
  @IsNumber()
  @Column({ type: 'float', nullable: false })
  rate: number;

  @IsDate()
  @Column({ type: 'timestamp', nullable: true })
  viewedDate: Date;

  @IsDate()
  @CreateDateColumn()
  createdAt: Date;

  @IsDate()
  @UpdateDateColumn()
  updatedAt: Date;
}
