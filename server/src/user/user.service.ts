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

  async getById(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
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

  async update(id: string, dto: UserDto) {
    let data = dto;
    if (dto.password) {
      data = { ...dto, password: await hash(dto.password) };
    }

    return this.prisma.user.update({
      where: {
        id,
      },
      data,
      select: {
        id: true,
        number: true,
        name: true,
      },
    });
  }

  async delete(id: string) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async addCarToUser(id: string, dto: any) {
    const user = await this.getById(id);
    await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        userCars: [dto],
      },
      select: {
        userCars: true,
      },
    });

    return user;
  }

  // async removeCarFromUser(id: string) {
  //   const user = await this.getById(id);
  //   await this.prisma.user.update({
  //     where: {
  //       id,
  //     },
  //     data: {
  //       userCars: [],
  //       cityDistance: [],
  //       trackDistance: [],
  //       otherCityDistance: [],
  //     },
  //   });
  //   return user;
  // }
}
