import { Controller, Get, Query } from '@nestjs/common';
import { FindHotelsService } from './find-hotels.service';

@Controller('hotels')
export class FindHotelsController {
  constructor(private readonly findHotelsService: FindHotelsService) {}

  @Get('all')
  async findAll() {
    return await this.findHotelsService.findAll();
  }

  @Get('filter')
  async findHotels() {
    return await this.findHotelsService.filterHotels();
  }
}
