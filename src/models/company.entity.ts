import { IsNumber, IsString } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PlayEntity } from './play.entity';

@Entity({ name: 'company' })
export class CompanyEntity {
  @IsNumber()
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column({ type: 'varchar', nullable: false })
  name: string;

  @IsString()
  @Column({ type: 'varchar', nullable: true })
  companyApiCode: string;

  @OneToMany(() => PlayEntity, (play) => play.company)
  plays: PlayEntity[];
}
