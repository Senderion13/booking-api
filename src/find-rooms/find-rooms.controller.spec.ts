import { Test, TestingModule } from '@nestjs/testing';
import { FindRoomsController } from './find-rooms.controller';

describe('FindRoomsController', () => {
  let controller: FindRoomsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindRoomsController],
    }).compile();

    controller = module.get<FindRoomsController>(FindRoomsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
