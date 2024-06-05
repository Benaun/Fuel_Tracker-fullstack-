import { IsString, IsOptional } from 'class-validator';

export class CarDto {
  @IsString()
  @IsOptional()
  model?: string;

  @IsString()
  @IsOptional()
  city?: string;

  @IsString()
  @IsOptional()
  track?: string;

  @IsString()
  @IsOptional()
  otherCity?: string;
}
