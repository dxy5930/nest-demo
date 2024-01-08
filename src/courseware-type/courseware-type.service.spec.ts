import { Test, TestingModule } from '@nestjs/testing';
import { CoursewareTypeService } from './courseware-type.service';

describe('CoursewareTypeService', () => {
  let service: CoursewareTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursewareTypeService],
    }).compile();

    service = module.get<CoursewareTypeService>(CoursewareTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
