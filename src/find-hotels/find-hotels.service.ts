import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import FindHotelsDTO from './dto/FindHotels.dto';

@Injectable()
export class FindHotelsService {
  constructor(private prisma: PrismaService) {}

  /*
   * Return all hotels
   */
  async findAll() {
    return await this.prisma.hotel.findMany();
  }

  /*
   * Return all rooms that match the conditions
   */
  async filterHotels(query: FindHotelsDTO) {
    try {
      return await this.prisma.hotel.findMany(
        this.getFilterParamsFromQuery(query),
      );
    } catch {
      throw new BadRequestException('Incorrect parameters');
    }
  }

  getFilterParamsFromQuery(query: FindHotelsDTO) {
    const where: any = {};
    const orderBy: any = {};

    for (const key in query) {
      if (key === 'ratingSortOrder') {
        orderBy.rating = query[key] === 'asc' ? 'asc' : 'desc';
      } else if (key === 'rating') {
        where[key] = {};
        where[key].gte = query[key];
      } else {
        where[key] = query[key];
      }
    }

    return {
      where,
      orderBy,
    };
  }
}
