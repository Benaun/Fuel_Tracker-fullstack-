import {
  Body,
  Controller,
  Get,
  Delete,
  Param,
  HttpCode,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { UserDto } from './user.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('user/profile')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Auth()
  async profile(@CurrentUser('userId') id: string) {
    return this.userService.getProfile(id);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put()
  @Auth()
  async updateProfile(@CurrentUser('userId') id: string, @Body() dto: UserDto) {
    return this.userService.update(id, dto);
  }
}

@Controller('/users')
export class GetAllUsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Auth()
  async getAll() {
    return this.userService.getAll();
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
