import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FindRoomsModule } from './find-rooms/find-rooms.module';

@Module({
  imports: [FindRoomsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
