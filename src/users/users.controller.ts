import { Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('user')
export class UsersController {
  @Get('me')
  getUserMe() {
    return 'my info';
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
