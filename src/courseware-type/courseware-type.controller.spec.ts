import { Test, TestingModule } from '@nestjs/testing';
import { CoursewareTypeController } from './courseware-type.controller';
import { CoursewareTypeService } from './courseware-type.service';

describe('CoursewareTypeController', () => {
  let controller: CoursewareTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursewareTypeController],
      providers: [CoursewareTypeService],
    }).compile();

    controller = module.get<CoursewareTypeController>(CoursewareTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
