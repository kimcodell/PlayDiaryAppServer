import { IsIn, IsInt, IsNumber, IsPositive } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PlayEntity } from './play.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'review' })
export class ReviewEntity {
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

  @Column({ type: 'text', nullable: false })
  content: string;

  @IsIn([1, 2, 3])
  @Column({ type: 'tinyint', nullable: false, default: 1 })
  accessibility: 1 | 2 | 3; //1: 전체 공개, 2: 팔로워 공개, 3 비공개

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt: Date | null;
}
