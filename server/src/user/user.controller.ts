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
import { CarDto } from 'src/car/car.dto';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Получить профиль текущим пользователем
  @Get('profile')
  @Auth()
  async profile(@CurrentUser('id') id: string) {
    return this.userService.getProfile(id);
  }

  // Изменить профиль текущим пользователем
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('profile')
  @Auth()
  async updateProfile(@CurrentUser('id') id: string, @Body() dto: UserDto) {
    return this.userService.update(id, dto);
  }

  // Изменить профиль пользователя(админом)
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async updateUserProfile(@Param('id') id: string, @Body() dto: UserDto) {
    return this.userService.update(id, dto);
  }

  // Удалить профиль пользователя(админом)
  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }

  // Получить всех пользователей
  @Get()
  @Auth()
  async getAll() {
    return this.userService.getAll();
  }

  // Выбрать авто и добавить пользователем
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put()
  @Auth()
  async addCarToUser(@CurrentUser('id') id: string, @Body() dto: CarDto) {
    return this.userService.addCarToUser(id, dto);
  }

  // Удалить выбранное авто пользователем
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put()
  @Auth()
  async removeCarFromUser(@CurrentUser('id') id: string) {
    return this.userService.removeCarFromUser(id);
  }
}
