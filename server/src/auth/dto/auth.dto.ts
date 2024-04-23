import { IsString } from 'class-validator';

export class AuthDto {
  @IsString()
  number: string;

  @IsString()
  name: string;

  @IsString()
  password: string;
}
