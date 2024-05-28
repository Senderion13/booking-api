import { Module } from '@nestjs/common';
import { FindRoomsModule } from './find-rooms/find-rooms.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [FindRoomsModule, ServeStaticModule.forRoot({})],
  controllers: [],
  providers: [],
})
export class AppModule {}
