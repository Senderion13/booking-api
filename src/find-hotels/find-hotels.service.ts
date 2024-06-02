import Hotel from './entities/hotel.entity';
import FindHotelsDTO from './dto/FindHotels.dto';
import { PrismaService } from '../prisma/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class FindHotelsService {
  constructor(private prisma: PrismaService) {}

  /*
   * Return all hotels
   */
  async findAll(): Promise<Hotel[]> {
    const hotels = await this.prisma.hotel.findMany();
    return await this.addImagesToHotels(hotels);
  }

  /*
   * Return all rooms that match the conditions
   */
  async filterHotels(query: FindHotelsDTO): Promise<Hotel[]> {
    try {
      const hotels = await this.prisma.hotel.findMany(
        this.getFilterParamsFromQuery(query),
      );
      if (hotels.length === 0) {
        return [];
      } else {
        return await this.addImagesToHotels(hotels);
      }
    } catch {
      throw new BadRequestException('Incorrect parameters');
    }
  }

  async getFirstHotelImage(hotelId: number) {
    return await this.prisma.hotelImages.findFirst({
      select: { url: true },
      where: {
        hotelId: hotelId,
      },
    });
  }

  async addImagesToHotels(hotels): Promise<Hotel[]> {
    const hotelsWithImages: Hotel[] = [];
    for (let i = 0; i < hotels.length; i++) {
      // get first hotel image associated with hotel id
      const hotelImage = await this.getFirstHotelImage(hotels[i].id);

      // map results from DataBase to Hotel entity
      hotelsWithImages[i] = new Hotel();
      for (const key in hotels[i]) {
        hotelsWithImages[i][key] = hotels[i][key];
      }
      hotelsWithImages[i].imageUrl = hotelImage.url;
    }
    return hotelsWithImages;
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
