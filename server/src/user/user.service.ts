import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getById(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        cars: true,
      },
    });
  }

  async getUsers() {
    return this.prisma.user.findMany({
      select: {
        number: true,
        name: true,
        id: true,
        role: true,
        password: false,
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

  async getProfile(id: number) {
    const profile = await this.getById(id);
    const cityKilometrs = profile.cars?.map((car) =>
      car.cityDistance.reduce((a: number, b: number) => a + b, 0),
    );
    const trackKilometrs = profile.cars?.map((car) =>
      car.trackDistance.reduce((a: number, b: number) => a + b, 0),
    );
    const otherCityKilometrs = profile.cars?.map((car) =>
      car.otherCityDistance.reduce((a: number, b: number) => a + b, 0),
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = profile;

    return {
      user: rest,
      statistics: [
        { label: 'Город', value: cityKilometrs },
        { label: 'Трасса', value: trackKilometrs },
        { label: 'Другой город', value: otherCityKilometrs },
      ],
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

  async update(id: number, dto: UserDto) {
    let data = dto;
    if (dto.password) {
      data = { ...dto, password: await hash(dto.password) };
    }

    return this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }
}
