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
import { CarDto } from './car.dto';

@Controller('/cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  @Auth()
  async getAll() {
    return this.carService.getAll();
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async update(@Param('id') id: string, @Body() dto: CarDto) {
    return this.carService.update(id, dto);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async create() {
    return this.carService.create();
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(@Param('id') id: string) {
    return this.carService.delete(id);
  }
}
