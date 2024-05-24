import { Controller, Get, Query } from '@nestjs/common';
import { FindRoomsDTO } from './dto/find-room.dto';
import { FindRoomsService } from './find-rooms.service';

@Controller('rooms')
export class FindRoomsController {
  constructor(private readonly findRoomsService: FindRoomsService) {}

  @Get('all')
  async findAll(): Promise<string> {
    const rooms = await this.findRoomsService.findAll();
    return rooms.length >= 1
      ? JSON.stringify(rooms) // remove JSON.stringify when front will be ready
      : 'There are no rooms with specified parameters';
  }

  @Get('filter')
  async findRooms(@Query() query: any): Promise<string> {
    const roomParams: FindRoomsDTO = this.transformQueryToDTO(query);
    const rooms = await this.findRoomsService.filterRooms(roomParams);
    return rooms.length >= 1
      ? JSON.stringify(rooms) // remove JSON.stringify when front will be ready
      : 'There are no rooms with specified parameters';
  }

  transformQueryToDTO(query: any): FindRoomsDTO {
    const findRoomsDTO: FindRoomsDTO = {};
    for (const key in query) {
      if (key.includes('has')) {
        findRoomsDTO[key] = query[key] === 'true' ? true : false;
      }
      // if number value
      else if (!Number.isNaN(Number.parseInt(query[key]))) {
        findRoomsDTO[key] = Number.parseInt(query[key]);
      }
      // if string value
      else {
        findRoomsDTO[key] = query[key];
      }
    }
    return findRoomsDTO;
  }
}
