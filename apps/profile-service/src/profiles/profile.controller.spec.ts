import { Test, TestingModule } from '@nestjs/testing';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';

describe('ProfileController', () => {
  let profileController: ProfilesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProfilesController],
      providers: [ProfilesService],
    }).compile();

    profileController = app.get<ProfilesController>(ProfilesController);
  });

  /*describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(profileController.getHello()).toBe('Hello World!');
    });
  });*/
});
