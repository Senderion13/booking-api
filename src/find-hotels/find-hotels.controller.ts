import { Controller, Get, Param, Query } from '@nestjs/common';
import { FindHotelsService } from './find-hotels.service';
import FindHotelsDTO from './dto/FindHotels.dto';

@Controller('hotels')
export class FindHotelsController {
  constructor(private readonly findHotelsService: FindHotelsService) {}

  @Get('all')
  async findAll() {
    return await this.findHotelsService.findAll();
  }

  @Get('filter')
  async findHotels(@Query() query: FindHotelsDTO) {
    return await this.findHotelsService.filterHotels(query);
  }

  @Get(':id')
  async getHotelInfoById(@Param() params: any) {
    return await this.findHotelsService.getHotelInfoById(
      Number.parseInt(params.id),
    );
  }
}
