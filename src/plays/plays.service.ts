import { BadRequestException, Injectable } from '@nestjs/common';
import { PlaysRepository } from './plays.repository';

@Injectable()
export class PlaysService {
  constructor(private readonly playsRepository: PlaysRepository) {}

  async getAllPlays(genre?: string) {
    return this.playsRepository.findAllPlays(!!genre && genre);
  }

  async getPlayDetail(id: number) {
    const play = this.playsRepository.findPlayById(id);
    if (!play) {
      throw new BadRequestException('존재하지 않는 공연입니다.');
    }
    return play;
  }
}
