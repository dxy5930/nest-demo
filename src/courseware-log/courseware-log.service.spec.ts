import { Test, TestingModule } from '@nestjs/testing';
import { CoursewareLogService } from './courseware-log.service';

describe('CoursewareLogService', () => {
  let service: CoursewareLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursewareLogService],
    }).compile();

    service = module.get<CoursewareLogService>(CoursewareLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
