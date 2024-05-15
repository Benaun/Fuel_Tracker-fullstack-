import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CarDto } from './car.dto';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.car.findMany();
  }

  async getById(carId: string) {
    return this.prisma.car.findUnique({
      where: {
        carId,
      },
    });
  }

  async create(dto: CarDto) {
    const car = {
      model: dto.model,
      city: dto.city,
      track: dto.track,
      otherCity: dto.otherCity,
    };

    return this.prisma.car.create({
      data: {
        ...car,
        userId: '',
      },
    });
  }

  async update(dto: CarDto, carId: string) {
    const data = dto;

    return this.prisma.car.update({
      where: {
        carId,
      },
      data,
      select: {
        model: true,
        city: true,
        track: true,
        otherCity: true,
      },
    });
  }

  async delete(carId: string) {
    return this.prisma.car.delete({
      where: {
        carId,
      },
    });
  }
}
