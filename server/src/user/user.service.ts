import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.user.findMany();
  }

  async getById(userId: string) {
    return this.prisma.user.findUnique({
      where: {
        userId,
      },
      include: {
        cars: true,
      },
    });
  }

  async getProfile(id: string) {
    const profile = await this.getById(id);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = profile;

    return {
      user: rest,
    };
  }

  async create(dto: AuthDto) {
    const user = {
      number: dto.number,
      name: '',
      password: await hash(dto.password),
    };

    return this.prisma.user.create({
      data: user,
    });
  }

  async update(userId: string, dto: UserDto) {
    let data = dto;
    if (dto.password) {
      data = { ...dto, password: await hash(dto.password) };
    }

    return this.prisma.user.update({
      where: {
        userId,
      },
      data,
      select: {
        userId: true,
        number: true,
        name: true,
      },
    });
  }

  async delete(userId: string) {
    return this.prisma.user.delete({
      where: {
        userId: userId,
      },
    });
  }

  async addCarToUser(carId: string, userId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        userId: userId,
      },
      include: {
        cars: true,
      },
    });

    const car = await this.prisma.car.findUnique({
      where: {
        carId: carId,
      },
    });

    if (!user) throw new Error('Пользователь не найден!');

    const updatedUser = await this.prisma.user.update({
      where: {
        userId: userId,
      },
      data: {
        cars: {
          connect: {
            carId: car.carId,
          },
        },
      },
    });

    return updatedUser;
  }
}
