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
    });
  }

  getByNumber(number: string) {
    return this.prisma.user.findUnique({
      where: {
        number,
      },
    });
  }

  async getProfile(userId: string) {
    const profile = await this.getById(userId);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = profile;

    return {
      user: rest,
    };
  }

  async create(dto: AuthDto) {
    const user = {
      number: dto.number,
      name: dto.name,
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
    return await this.prisma.user.delete({
      where: {
        userId: userId,
      },
    });
  }

  async addCarToUser(userId: string, dto: any) {
    const user = await this.prisma.user.findUnique({
      where: {
        userId,
      },
    });
    return await this.prisma.user.update({
      where: {
        userId: user.userId,
      },
      data: {
        userCars: [dto],
      },
      select: {
        userCars: true,
      },
    });
  }

  async removeCarFromUser(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        userId,
      },
    });
    return await this.prisma.user.update({
      where: {
        userId: user.userId,
      },
      data: {
        userCars: [],
        cityDistance: [],
        trackDistance: [],
        otherCityDistance: [],
      },
    });
  }
}
