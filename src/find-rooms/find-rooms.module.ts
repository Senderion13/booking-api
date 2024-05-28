import { Module } from '@nestjs/common';
import { FindRoomsService } from './find-rooms.service';
import { FindRoomsController } from './find-rooms.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [FindRoomsController],
  providers: [FindRoomsService],
  imports: [PrismaModule],
})
export class FindRoomsModule {}
