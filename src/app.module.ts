import { Module } from '@nestjs/common';
import { FindRoomsModule } from './find-rooms/find-rooms.module';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [FindRoomsModule, ServeStaticModule.forRoot({})],
  controllers: [],
  providers: [],
})
export class AppModule {}
