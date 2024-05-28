import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FindRoomsModule } from './find-rooms/find-rooms.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [FindRoomsModule, ServeStaticModule.forRoot({}), PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
