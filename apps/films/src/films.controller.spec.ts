import { Test, TestingModule } from '@nestjs/testing';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';

describe('FilmsController', () => {
  let filmsController: FilmsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FilmsController],
      providers: [FilmsService],
    }).compile();

    filmsController = app.get<FilmsController>(FilmsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(filmsController.getHello()).toBe('Hello World!');
    });
  });
});
