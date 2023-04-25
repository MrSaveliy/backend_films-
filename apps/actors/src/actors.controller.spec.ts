import { Test, TestingModule } from '@nestjs/testing';
import { ActorsController } from './actors.controller';
import { ActorsService } from './actors.service';

describe('ActorsController', () => {
  let actorsController: ActorsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ActorsController],
      providers: [ActorsService],
    }).compile();

    actorsController = app.get<ActorsController>(ActorsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(actorsController.getHello()).toBe('Hello World!');
    });
  });
});
