import { PlayEntity } from './play.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { IsUrl } from 'class-validator';

@Entity({ name: 'play_url' })
export class UrlEntity {
  @PrimaryColumn()
  playId: number;
  @OneToOne(() => PlayEntity)
  @JoinColumn({ name: 'playId' })
  play: PlayEntity;

  @IsUrl()
  @Column({ type: 'varchar', length: 200, nullable: true })
  instagram: string;

  @IsUrl()
  @Column({ type: 'varchar', length: 200, nullable: true })
  facebook: string;

  @IsUrl()
  @Column({ type: 'varchar', length: 200, nullable: true })
  twitter: string;

  @IsUrl()
  @Column({ type: 'varchar', length: 200, nullable: true })
  interpark: string;

  @IsUrl()
  @Column({ type: 'varchar', length: 200, nullable: true })
  yes24: string;

  @IsUrl()
  @Column({ type: 'varchar', length: 200, nullable: true })
  melonTicket: string;

  @IsUrl()
  @Column({ type: 'varchar', length: 200, nullable: true })
  ticketLink: string;
}
