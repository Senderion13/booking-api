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
      if (key === 'minPrice') {
        where.price = {
          gte: Number.parseInt(query.minPrice),
          lte: Number.parseInt(query.maxPrice),
        };
      } else if (key === 'guests') {
        where.guests = {
          equals: Number.parseInt(query.guests),
        };
      } else if (key !== 'priceSortOrder') {
        where[key] = query[key] === 'true' ? true : false;
      } else {
        orderBy.price = query.priceSortOrder === 'asc' ? 'asc' : 'desc';
      }
    }

    return {
      where,
      orderBy: { price: orderBy.price },
    };
  }
}
