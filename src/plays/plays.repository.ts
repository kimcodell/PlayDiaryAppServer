import { Genre } from './../common/enums/plays.genre.enum';
import { PlayEntity } from 'src/models/play.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PlaysRepository {
  constructor(
    @InjectRepository(PlayEntity)
    private readonly playsRepository: Repository<PlayEntity>,
  ) {}

  async findAllPlays(genre?: string) {
    const genreCode = !!genre && Genre[genre];
    const options = !!genre ? { where: { genre: genreCode } } : {};
    return this.playsRepository.find(options);
  }

  async findPlayById(id: number) {
    return this.playsRepository.findOne({
      where: { id },
      select: [
        'id',
        'title',
        'status',
        'startAt',
        'endAt',
        'runtime',
        'genre',
        'limitedAge',
        'story',
        'poster',
      ],
      relations: { company: true, auditorium: true },
    });
  }
}
