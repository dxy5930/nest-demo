import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CoursewareLogService } from './courseware-log.service';
import { CreateCoursewareLogDto } from './dto/create-courseware-log.dto';

import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('coursewareLog-课件日志')
@Controller('v1')
export class CoursewareLogController {
  constructor(private readonly coursewareLogService: CoursewareLogService) {}

  @Post('coursewareLog')
  @ApiOperation({summary: '查询课件日志'})
  async coursewareList(@Body() body: CreateCoursewareLogDto) {
    await this.coursewareLogService.coursewareList(body);
  }
}
