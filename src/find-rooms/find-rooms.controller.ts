import FindRoomsDTO from './dto/FindRooms.dto';
import { FindRoomsService } from './find-rooms.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('rooms')
export class FindRoomsController {
  constructor(private readonly findRoomsService: FindRoomsService) {}

  @Get('all')
  async findAll() {
    return await this.findRoomsService.findAll();
  }

  @Get('filter')
  async findRooms(@Query() query: FindRoomsDTO) {
    return await this.findRoomsService.filterRooms(query);
  }
}
