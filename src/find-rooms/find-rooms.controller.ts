import { Controller, Get, Query } from '@nestjs/common';
import { FindRoomsService } from './find-rooms.service';

@Controller('rooms')
export class FindRoomsController {
  constructor(private readonly findRoomsService: FindRoomsService) {}

  @Get('all')
  findAll(): string {
    return this.findRoomsService.findAll();
  }

  @Get('filter')
  findRooms(@Query() roomParams: any): string {
    console.log(typeof roomParams);
    return this.findRoomsService.filterRooms(roomParams);
  }
}
