import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { CarModule } from './car/car.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, CarModule],
})
export class AppModule {}
