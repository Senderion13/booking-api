import Room from './entities/room.entity';
import { Injectable } from '@nestjs/common';
import { FindRoomsDTO } from './dto/find-room.dto';

@Injectable()
export class FindRoomsService {
  // THIS ARRAY MUST BE DELETED AFTER ADDING DATABASE
  private exampleRooms: Room[] = [
    {
      id: 1,
      price: 100,
      guests: 3,
      hasWifi: false,
      hasParking: true,
      hasBar: true,
      hasShower: false,
      hasBreakfast: true,
    },
    {
      id: 2,
      price: 100500,
      guests: 5,
      hasWifi: true,
      hasParking: false,
      hasBar: true,
      hasShower: true,
      hasBreakfast: false,
    },
  ];

  async findAll(): Promise<Room[]> {
    // THIS CODE MUST BE REPLACED WITH SQL QUERY TO RECIEVE ROOMS
    // FROM DATABASE
    return this.exampleRooms;
  }

  async filterRooms(findRoomsDTO: FindRoomsDTO): Promise<Room[]> {
    // filter rooms
    // THIS CODE MUST BE REPLACED WITH SQL QUERY TO RECIEVE ROOMS
    // FROM DATABASE
    const filteredRooms = this.exampleRooms.filter((room) => {
      return Object.keys(findRoomsDTO).every((key) => {
        return room[key] === findRoomsDTO[key];
      });
    });

    // sort filtered rooms if needed
    const sortOrder: string = findRoomsDTO['priceSort'];

    if (sortOrder !== undefined) {
    }

    return filteredRooms;
  }
}
