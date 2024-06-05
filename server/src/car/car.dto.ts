import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CarDto {
  @IsString()
  @IsOptional()
  model?: string;

  @IsNumber()
  @IsOptional()
  city?: number;

  @IsNumber()
  @IsOptional()
  track?: number;

  @IsNumber()
  @IsOptional()
  otherCity?: number;
}
