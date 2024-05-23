import { Test, TestingModule } from '@nestjs/testing';
import { FindRoomsService } from './find-rooms.service';

describe('FindRoomsService', () => {
  let service: FindRoomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindRoomsService],
    }).compile();

    service = module.get<FindRoomsService>(FindRoomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
