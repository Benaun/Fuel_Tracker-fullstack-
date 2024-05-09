import { IsString, MinLength } from 'class-validator';

export class AuthDto {
  @IsString()
  number: string;

  @MinLength(6, {
    message: 'Пароль должен быть не меньше 6 символов',
  })
  @IsString()
  password: string;
}
