import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

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
  async filterHotels() {
    // TODO: REPLACE THIS CODE
    return await this.prisma.hotel.findMany();
  }
}
