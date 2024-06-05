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
      city: '',
      track: '',
      otherCity: '',
    };

    return this.prisma.car.create({
      data: car,
    });
  }

  async update(id: string, dto: CarDto) {
    return this.prisma.car.update({
      where: {
        id,
      },
      data: {
        model: dto.model,
        city: dto.city,
        track: dto.track,
        otherCity: dto.otherCity,
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
