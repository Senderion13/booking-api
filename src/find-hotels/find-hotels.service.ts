import Hotel from './entities/hotel.entity';
import FindHotelsDTO from './dto/FindHotels.dto';
import { PrismaService } from '../prisma/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class FindHotelsService {
  constructor(private prisma: PrismaService) {}

  /*
   * Return all hotels with first image only
   */
  async findAll(): Promise<Hotel[]> {
    const hotels = await this.prisma.hotel.findMany();
    return await this.addFirstImagesToHotels(hotels);
  }

  /*
   * Return all hotels that match the conditions with first image only
   */
  async filterHotels(query: FindHotelsDTO): Promise<Hotel[]> {
    try {
      const hotels = await this.prisma.hotel.findMany(
        this.getFilterParamsFromQuery(query),
      );
      if (hotels.length > 0) {
        return await this.addFirstImagesToHotels(hotels);
      } else {
        return [];
      }
    } catch {
      throw new BadRequestException('Incorrect parameters');
    }
  }

  /*
   * Return the hotel with specified id and all its images
   */
  async getHotelInfoById(id: number): Promise<Hotel> {
    try {
      const hotel = await this.prisma.hotel.findUnique({
        where: { id: id },
      });
      return await this.addAllImagesToHotel(hotel);
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

  async getAllHotelImages(hotelId: number) {
    return await this.prisma.hotelImages.findMany({
      select: { url: true },
      where: {
        hotelId: hotelId,
      },
    });
  }

  async addFirstImagesToHotels(hotels): Promise<Hotel[]> {
    const hotelsWithImages: Hotel[] = [];
    for (let i = 0; i < hotels.length; i++) {
      const hotelImage = await this.getFirstHotelImage(hotels[i].id);

      // map results from DataBase to Hotel entity
      hotelsWithImages[i] = new Hotel();
      for (const key in hotels[i]) {
        hotelsWithImages[i][key] = hotels[i][key];
      }
      hotelsWithImages[i].images = [];
      hotelsWithImages[i].images.push(hotelImage.url);
    }
    return hotelsWithImages;
  }

  async addAllImagesToHotel(hotel): Promise<Hotel> {
    const hotelImages = await this.getAllHotelImages(hotel.id);

    const hotelWithImages = new Hotel();
    for (const key in hotel) {
      hotelWithImages[key] = hotel[key];
    }

    hotelWithImages.images = [];
    for (const image of hotelImages) {
      hotelWithImages.images.push(image.url);
    }

    return hotelWithImages;
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
