import { IsInt, IsNumber, IsString, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export default class FindHotelsDTO {
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  id?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  rating?: number;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  location?: string;

  @IsString()
  @IsOptional()
  ratingSortOrder?: string;
}
