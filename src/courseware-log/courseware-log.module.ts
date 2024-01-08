import { Module } from '@nestjs/common';
import { CoursewareLogService } from './courseware-log.service';
import { CoursewareLogController } from './courseware-log.controller';
import { CoursewareLogEntity } from './entities/courseware-log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  controllers: [CoursewareLogController],
  providers: [CoursewareLogService],
  imports: [TypeOrmModule.forFeature([CoursewareLogEntity])],
})
export class CoursewareLogModule {}
