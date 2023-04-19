import { Test, TestingModule } from '@nestjs/testing';
import { BamiasController } from './bamias.controller';

describe('BamiasController', () => {
  let controller: BamiasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BamiasController],
    }).compile();

    controller = module.get<BamiasController>(BamiasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
