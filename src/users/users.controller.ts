import { JwtAuthGuard } from './../common/guards/jwt.guard';
import {
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  getUserMe(@Req() req: Request) {
    return this.usersService.getUserInfo(req.user);
  }

  @Get(':userId')
  getUserInfo(@Param('userId') id: string) {
    return 'userInfo';
  }

  @Get(':userId/ratings')
  getUserRatings(@Param('userId') id: string) {
    return 'user ratings list';
  }

  @Get(':userId/reviews')
  getUserReviews(@Param('userId') id: string) {
    return 'user reviews list';
  }

  @Get(':userId/wants')
  getUserWants(@Param('userId') id: string) {
    return 'user wants list';
  }

  @Get(':userId/reservations')
  getUserReservations(@Param('userId') id: string) {
    return 'user reservations list';
  }

  @Get(':userId/followers')
  getUserFollowers(@Param('userId') id: string) {
    return 'user followers list';
  }

  @Get(':userId/followings')
  getUserFollowings(@Param('userId') id: string) {
    return 'user followings list';
  }

  @Get(':userId/statistics')
  getUserStatistics(@Param('userId') id: string) {
    return 'user wants list';
  }

  @Post(':userId/follow')
  followUser(@Param('userId') id: string) {
    return 'follow user';
  }

  @Patch('profile')
  changeProfile() {
    return 'change profile';
  }
}
