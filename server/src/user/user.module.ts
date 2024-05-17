import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { GetAllUsersController, UserController } from './user.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UserController, GetAllUsersController],
  providers: [UserService, PrismaService],
  exports: [UserService],
})
export class UserModule {}
