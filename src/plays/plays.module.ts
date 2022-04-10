import { Module } from '@nestjs/common';
import { PlaysController } from './plays.controller';
import { PlaysService } from './plays.service';

@Module({
  controllers: [PlaysController],
  providers: [PlaysService]
})
export class PlaysModule {}
