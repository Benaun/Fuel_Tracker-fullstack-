import { IsString, IsOptional, MinLength } from 'class-validator';

export class AuthDto {
  @IsString()
  number: string;

  @IsString()
  @IsOptional()
  name?: string;

  @MinLength(6, {
    message: 'Пароль должен быть не меньше 6 символов',
  })
  @IsString()
  password: string;
}
