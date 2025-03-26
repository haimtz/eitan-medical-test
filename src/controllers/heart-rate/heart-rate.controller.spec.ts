import { Test, TestingModule } from '@nestjs/testing';
import { HeartRateController } from './heart-rate.controller';

describe('HeartRateController', () => {
  let controller: HeartRateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeartRateController],
    }).compile();

    controller = module.get<HeartRateController>(HeartRateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
