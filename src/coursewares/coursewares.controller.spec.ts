import { Test, TestingModule } from '@nestjs/testing';
import { CoursewaresController } from './coursewares.controller';
import { CoursewaresService } from './coursewares.service';

describe('CourseTypeController', () => {
  let controller: CoursewaresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursewaresController],
      providers: [CoursewaresService],
    }).compile();

    controller = module.get<CoursewaresController>(CoursewaresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
