import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  UsePipes,
} from '@nestjs/common';
import { PlaysService } from './plays.service';

@Controller('play')
export class PlaysController {
  constructor(private readonly playsService: PlaysService) {}

  @Get()
  getAllPlay(@Query('genre') genre: string) {
    return this.playsService.getAllPlays(genre);
  }

  @Get(':playId')
  getAllMusical(@Param('playId', ParseIntPipe) id: number) {
    return this.playsService.getPlayDetail(id);
  }
}
