import { Controller, Get } from '@nestjs/common';

@Controller('play')
export class PlaysController {
  @Get('play')
  getAllPlay() {
    return 'play list';
  }

  @Get('musical')
  getAllMusical() {
    return 'musical list';
  }
}
