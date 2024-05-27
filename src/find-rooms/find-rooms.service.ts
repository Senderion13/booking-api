import { BadRequestException, Injectable } from '@nestjs/common';
import FindRoomsDTO from './dto/FindRooms.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FindRoomsService {
  constructor(private prisma: PrismaService) {}

  /*
   * Return all rooms
   */
  async findAll() {
    return await this.prisma.room.findMany();
  }

  /*
   * Return all rooms that match the conditions
   */
  async filterRooms(query: FindRoomsDTO) {
    try {
      return await this.prisma.room.findMany(
        this.getFilterParamsFromQuery(query),
      );
    } catch {
      throw new BadRequestException('Incorrect parameters');
    }
  }

  getFilterParamsFromQuery(query: FindRoomsDTO) {
    const where: any = {};
    const orderBy: any = {};

    for (const key in query) {
      if (key === 'minPrice' || key === 'maxPrice') {
        where.price = {};
        if (query.minPrice) {
          where.price.gte = query.minPrice;
        }
        if (query.maxPrice) {
          where.price.lte = query.maxPrice;
        }
      } else if (key === 'priceSortOrder') {
        orderBy.price = query[key] === 'asc' ? 'asc' : 'desc';
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
