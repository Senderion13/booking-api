import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FindRoomsService {
  constructor(private prisma: PrismaService) {}

  /*
   * Return all rooms
   */
  async findAll() {
    const result = await this.prisma.room.findMany();
    return { responce: result };
  }

  /*
   * Return all rooms that match the conditions
   */
  async filterRooms(query) {
    const result: any = {};
    try {
      const rooms = await this.prisma.room.findMany(
        this.getFilterParamsFromQuery(query),
      );

      if (rooms.length === 0) {
        result.responce = 'There are no rooms with specified parameters';
      } else {
        result.responce = rooms;
      }
    } catch (e) {
      result.responce = 'Bad request';
      result.error = e;
    }
    return result;
  }

  getFilterParamsFromQuery(query) {
    const where: any = {};
    const orderBy: any = {};

    for (const key in query) {
      if (key === 'minPrice' || key === 'maxPrice') {
        where.price = {};
        if (query.minPrice) {
          where.price.gte = Number(query.minPrice);
        }
        if (query.maxPrice) {
          where.price.lte = Number(query.maxPrice);
        }
      } else if (key === 'maxPrice') {
        where.price.lte = Number(query[key]);
      } else if (key === 'guests') {
        where.guests = {
          equals: Number.parseInt(query[key]),
        };
      } else if (key.includes('has')) {
        where[key] = query[key] === 'true' ? true : false;
      } else if (key === 'priceSortOrder') {
        orderBy.price = query[key] === 'asc' ? 'asc' : 'desc';
      }
    }

    return {
      where,
      orderBy: { price: orderBy.price },
    };
  }
}
