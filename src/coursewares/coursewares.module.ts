import { Module } from '@nestjs/common';
import { CoursewaresService } from './coursewares.service';
import { CoursewaresController } from './coursewares.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursewaresEntity } from './entities/coursewares.entity';

@Module({
  controllers: [CoursewaresController],
  providers: [CoursewaresService],
  imports:[TypeOrmModule.forFeature([CoursewaresEntity])]
})
export class CoursewaresModule {}
