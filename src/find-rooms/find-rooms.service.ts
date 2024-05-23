import { Injectable } from '@nestjs/common';
import RoomParameters from './entities/room-parameters.entity';

@Injectable()
export class FindRoomsService {
  private exampleRooms = [
    {
      id: 1,
      Hotel: {},
      hotelId: 3,
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
      Hotel: {},
      hotelId: 4,
      price: 100500,
      guests: 5,
      hasWifi: true,
      hasParking: false,
      hasBar: true,
      hasShower: true,
      hasBreakfast: false,
    },
  ];

  findAll(): string {
    return JSON.stringify(this.exampleRooms);
  }

  filterRooms(query: RoomParameters): string {
    const filterObject = {};

    for (const key in query) {
      const val = Number.parseInt(query[key]);
      if (!Number.isNaN(val) && val > 0) {
        filterObject[key] = val;
      } else {
        if (query[key].toLowerCase() === 'true') {
          filterObject[key] = true;
        } else if (query[key].toLowerCase() === 'false') {
          filterObject[key] = false;
        }
      }
    }

    const filteredRooms = this.exampleRooms.filter((room) => {
      return Object.keys(filterObject).every((key) => {
        if (Array.isArray(filterObject[key])) {
          return filterObject[key].includes(room[key]);
        }
        return room[key] === filterObject[key];
      });
    });

    return filteredRooms.length >= 1
      ? JSON.stringify(filteredRooms)
      : 'There are no room with specified parameters';
  }
}
