import { Module } from '@nestjs/common';
import { FindRoomsController } from './find-rooms.controller';
import { FindRoomsService } from './find-rooms.service';

@Module({
  controllers: [FindRoomsController],
  providers: [FindRoomsService],
})
export class FindRoomsModule {}
