import { PartialType } from '@nestjs/mapped-types';
import { CreateCoursewareLogDto } from './create-courseware-log.dto';

export class UpdateCoursewareLogDto extends PartialType(CreateCoursewareLogDto) {}
