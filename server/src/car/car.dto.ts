import { IsInt, IsString, IsOptional } from 'class-validator';

export class CarDto {
  @IsString()
  @IsOptional()
  model?: string;

  @IsInt()
  @IsOptional()
  city?: number;

  @IsInt()
  @IsOptional()
  track?: number;

  @IsInt()
  @IsOptional()
  otherCity?: number;
}
