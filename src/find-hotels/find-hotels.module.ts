import { Module } from '@nestjs/common';
import { FindHotelsService } from './find-hotels.service';
import { FindHotelsController } from './find-hotels.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [FindHotelsService],
  controllers: [FindHotelsController],
  imports: [PrismaModule],
})
export class FindHotelsModule {}
