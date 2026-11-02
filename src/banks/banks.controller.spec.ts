import { Test, TestingModule } from '@nestjs/testing';
import { BanksController } from './banks.controller.js';
import { BanksService } from './banks.service.js';

describe('BanksController', () => {
  let controller: BanksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BanksController],
      providers: [BanksService],
    }).compile();

    controller = module.get<BanksController>(BanksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
