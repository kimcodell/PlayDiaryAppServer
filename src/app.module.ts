import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { PlaysModule } from './plays/plays.module';
import { AuthModule } from './auth/auth.module';
import { PlayEntity } from './models/play.entity';
import { UserEntity } from './models/user.entity';
import { AuditoriumEntity } from './models/auditorium.entity';
import { CompanyEntity } from './models/company.entity';
import { ActorEntity } from './models/actor.entity';
import { FilmographyEntity } from './models/filmography.entity';
import { FollowEntity } from './models/follow.entity';
import { UrlEntity } from './models/url.entity';
import { LikedActorEntity } from './models/likedActor.entity';
import { ReservationEntity } from './models/reservation.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      // namingStrategy: new SnakeNamingStrategy(),
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        PlayEntity,
        UrlEntity,
        AuditoriumEntity,
        CompanyEntity,
        ActorEntity,
        FilmographyEntity,
        LikedActorEntity,
        UserEntity,
        FollowEntity,
        ReservationEntity,
      ],
      synchronize: true, //TODO 데이터 저장 후에는 false로 수정 필수.
      logging: true,
      keepConnectionAlive: true,
    }),
    UsersModule,
    PlaysModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
