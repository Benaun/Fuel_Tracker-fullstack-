import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CarDto } from './car.dto';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  async getCarId(id: number) {
    return this.prisma.car.findUnique({
      where: {
        id,
      },
    });
  }

  async getCars() {
    return this.prisma.car.findMany({
      select: {
        model: true,
        id: true,
        city: true,
        track: true,
        otherCity: true,
      },
    });
  }

  async create(dto: CarDto, userId: number) {
    const car = {
      model: dto.model,
      city: dto.city,
      track: dto.track,
      otherCity: dto.otherCity,
    };

    return this.prisma.car.create({
      data: {
        ...car,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async update(dto: Partial<CarDto>, carId: number, userId: number) {
    return this.prisma.car.update({
      where: {
        userId,
        id: Number(carId),
      },
      data: dto,
    });
  }

  async delete(carId: number) {
    return this.prisma.car.delete({
      where: {
        id: Number(carId),
      },
    });
  }
}
