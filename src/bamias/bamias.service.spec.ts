import { Test, TestingModule } from '@nestjs/testing';
import { BamiasService } from './bamias.service';

describe('BamiasService', () => {
  let service: BamiasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BamiasService],
    }).compile();

    service = module.get<BamiasService>(BamiasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
