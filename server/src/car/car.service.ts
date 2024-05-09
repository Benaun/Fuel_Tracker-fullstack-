import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CarDto } from './car.dto';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  async getAll(userId: string) {
    return this.prisma.car.findMany({
      where: {
        userId,
      },
    });
  }

  async create(dto: CarDto, userId: string) {
    return this.prisma.car.create({
      data: {
        ...dto,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async update(dto: Partial<CarDto>, carId: string, userId: string) {
    return this.prisma.car.update({
      where: {
        userId,
        id: carId,
      },
      data: dto,
    });
  }

  async delete(carId: string) {
    return this.prisma.car.delete({
      where: {
        id: carId,
      },
    });
  }
}
