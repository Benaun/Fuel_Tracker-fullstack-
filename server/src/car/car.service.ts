import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CarDto } from './car.dto';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.car.findMany();
  }

  async getById(id: string) {
    return this.prisma.car.findUnique({
      where: {
        id,
      },
    });
  }

  async create() {
    const car = {
      model: '',
      city: 0,
      track: 0,
      otherCity: 0,
    };

    return this.prisma.car.create({
      data: car,
    });
  }

  async update(dto: CarDto, id: string) {
    const data = dto;

    return this.prisma.car.update({
      where: {
        id,
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

  async delete(id: string) {
    return this.prisma.car.delete({
      where: {
        id,
      },
    });
  }
}
