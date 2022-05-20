import { PlayEntity } from './play.entity';
import { IsIn, IsNumber, IsString } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'auditorium' })
export class AuditoriumEntity {
  @IsNumber()
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column({ type: 'varchar', nullable: false })
  name: string;

  @IsIn([0, 1, 2])
  @Column({ type: 'tinyint', nullable: false, default: 0 })
  size: 0 | 1 | 2; //0: undefined, 1: 대극장, 2: 중/소극장

  @IsString()
  @Column({ type: 'varchar', nullable: true })
  auditoriumApiCode: string;

  @OneToMany(() => PlayEntity, (play) => play.auditorium)
  plays: PlayEntity[];
}
