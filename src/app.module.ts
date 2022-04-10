import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { PlaysModule } from './plays/plays.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: process.env.DB_PASSWORD,
      database: 'play_diary_app',
      entities: [],
      synchronize: true, //TODO 데이터 저장 후에는 false로 수정 필수.
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    PlaysModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
