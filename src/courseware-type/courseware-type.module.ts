import { Module } from '@nestjs/common';
import { CoursewareTypeService } from './courseware-type.service';
import { CoursewareTypeController } from './courseware-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursewareTypeEntity } from './entities/courseware-type.entity';

@Module({
  controllers: [CoursewareTypeController],
  providers: [CoursewareTypeService],
  imports: [TypeOrmModule.forFeature([CoursewareTypeEntity])],
})
export class CoursewareTypeModule {}
