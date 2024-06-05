import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import {
  AllUsersController,
  MainController,
  MyCarController,
  UserController,
} from './user.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [
    UserController,
    AllUsersController,
    MyCarController,
    MainController,
  ],
  providers: [UserService, PrismaService],
  exports: [UserService],
})
export class UserModule {}
