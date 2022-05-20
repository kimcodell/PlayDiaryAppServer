import {
  IsNumber,
  IsString,
  IsIn,
  IsDate,
  IsUrl,
  IsInt,
  IsPositive,
} from 'class-validator';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditoriumEntity } from './auditorium.entity';
import { CompanyEntity } from './company.entity';
import { FilmographyEntity } from './filmography.entity';
import { RatingEntity } from './rating.entity';
import { ReservationEntity } from './reservation.entity';
import { ReviewEntity } from './review.entity';
import { UrlEntity } from './url.entity';
import { WantPlayEntity } from './wantPlay.entity';

@Entity({ name: 'play' })
export class PlayEntity {
  @IsNumber()
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column({ type: 'varchar', length: 100, nullable: false })
  title: string;

  @IsNumber()
  @ManyToOne(() => CompanyEntity, (company) => company.id, {
    nullable: false,
  })
  company: number;

  @IsNumber()
  @ManyToOne(() => AuditoriumEntity, (auditorium) => auditorium.id, {
    nullable: false,
  })
  auditorium: number;

  @IsIn([1, 2, 3])
  @Column({ type: 'tinyint', nullable: false, default: 1 })
  status: 1 | 2 | 3; //1: 진행 중, 2: 예정, 3: 종료

  @IsDate()
  @Column({ type: 'timestamp', nullable: true })
  startAt: Date;

  @IsDate()
  @Column({ type: 'timestamp', nullable: true })
  endAt: Date;

  @IsString()
  @Column({ type: 'varchar', nullable: true })
  runtime: string;

  @IsIn([1, 2])
  @Column({ type: 'tinyint', nullable: false })
  genre: 1 | 2; //1: 뮤지컬, 2: 연극

  @IsNumber()
  @Column({ type: 'int', nullable: true })
  limitedAge: number;

  @IsIn([0, 1])
  @Column({ type: 'tinyint', default: 0 })
  isOpenrun: 0 | 1; //0: false, 1: true

  @IsString()
  @Column({ type: 'text' })
  story: string;

  @IsUrl()
  @Column({ type: 'varchar', length: 200 })
  poster: string;

  @IsInt()
  @IsPositive()
  @Column({ type: 'int', nullable: false, default: 0 })
  views: number;

  @IsString()
  @Column({ type: 'varchar', nullable: true })
  playApiCode: string;

  @OneToMany(() => FilmographyEntity, (filmo) => filmo.play)
  filmography: FilmographyEntity[];

  @OneToMany(() => ReservationEntity, (reservation) => reservation.play)
  reservation: ReservationEntity[];

  @OneToMany(() => WantPlayEntity, (wantPlay) => wantPlay.play)
  wantPlay: WantPlayEntity[];

  @OneToOne(() => UrlEntity)
  url: UrlEntity;

  @OneToMany(() => RatingEntity, (rating) => rating.play)
  rating: RatingEntity[];

  @OneToMany(() => ReviewEntity, (review) => review.play)
  review: ReviewEntity[];
}
