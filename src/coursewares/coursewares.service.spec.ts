import { Test, TestingModule } from '@nestjs/testing';
import { CoursewaresService } from './coursewares.service';

describe('CourseTypeService', () => {
  let service: CoursewaresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursewaresService],
    }).compile();

    service = module.get<CoursewaresService>(CoursewaresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
