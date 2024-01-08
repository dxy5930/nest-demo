import { Test, TestingModule } from '@nestjs/testing';
import { CoursewareLogController } from './courseware-log.controller';
import { CoursewareLogService } from './courseware-log.service';

describe('CoursewareLogController', () => {
  let controller: CoursewareLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursewareLogController],
      providers: [CoursewareLogService],
    }).compile();

    controller = module.get<CoursewareLogController>(CoursewareLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
