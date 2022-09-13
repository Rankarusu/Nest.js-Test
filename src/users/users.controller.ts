import { Body, Controller, Post } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async signupUser(
    @Body() userData: { name?: string; password: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
