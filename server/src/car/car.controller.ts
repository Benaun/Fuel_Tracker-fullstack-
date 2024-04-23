import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarService } from './car.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { CarDto } from './car.dto';

@Controller('user/cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  @Auth()
  async getCars() {
    return this.carService.getCars();
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async create(@Body() dto: CarDto, @CurrentUser('id') userId: number) {
    return this.carService.create(dto, userId);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async update(
    @Body() dto: CarDto,
    @CurrentUser('id') userId: number,
    @Param('id') id: number,
  ) {
    return this.carService.update(dto, id, userId);
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(@Param('id') id: number) {
    return this.carService.delete(id);
  }
}
