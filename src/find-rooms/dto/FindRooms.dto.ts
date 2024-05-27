import { BadRequestException } from '@nestjs/common';
import { Transform, Type } from 'class-transformer';
import {
  IsInt,
  IsNumber,
  IsBoolean,
  IsString,
  IsOptional,
} from 'class-validator';

function stringToBoolean(str: string): boolean {
  if (str === 'true') {
    return true;
  } else if (str === 'false') {
    return false;
  }
  throw new BadRequestException('Boolean string is incorrect');
}

export default class FindRoomsDTO {
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  id?: number;

  @IsInt()
  @IsOptional()
  @Type(() => Number)
  hotelId?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  minPrice?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  maxPrice?: number;

  @IsInt()
  @IsOptional()
  @Type(() => Number)
  guests?: number;

  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  @Transform(({ value }) => stringToBoolean(value))
  hasWifi?: boolean;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => stringToBoolean(value))
  hasParking?: boolean;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => stringToBoolean(value))
  hasBar?: boolean;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => stringToBoolean(value))
  hasShower?: boolean;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => stringToBoolean(value))
  hasBreakfast?: boolean;

  @IsString()
  @IsOptional()
  priceSortOrder?: string;
}
