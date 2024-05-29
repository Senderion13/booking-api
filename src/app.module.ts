import { Module } from '@nestjs/common';
import { FindRoomsModule } from './find-rooms/find-rooms.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { FindHotelsModule } from './find-hotels/find-hotels.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    FindRoomsModule,
    ServeStaticModule.forRoot({}),
    FindHotelsModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
