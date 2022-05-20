import { PlayEntity } from 'src/models/play.entity';
import { Module } from '@nestjs/common';
import { PlaysController } from './plays.controller';
import { PlaysRepository } from './plays.repository';
import { PlaysService } from './plays.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PlayEntity])],
  controllers: [PlaysController],
  providers: [PlaysService, PlaysRepository],
})
export class PlaysModule {}
