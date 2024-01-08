import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CoursewareTypeService } from './courseware-type.service';
import { CreateCoursewareTypeDto } from './dto/create-courseware-type.dto';
import { UpdateCoursewareTypeDto } from './dto/update-courseware-type.dto';
import { ApiOperation } from '@nestjs/swagger';
import { QueryCoursewareTypeDto } from './dto/query-courseware-type.dto';

@Controller('v1')
export class CoursewareTypeController {
  constructor(private readonly coursewareTypeService: CoursewareTypeService) {}

  @ApiOperation({ summary: '添加类型' })
  @Post('addCoursewareTab')
  async addCoursewareTab(@Body() body: CreateCoursewareTypeDto) {
    return await this.coursewareTypeService.addCoursewareTab(body);
  }

  @ApiOperation({ summary: '查询tabs' })
  @Post('getAllCoursewareTabs')
  async getAllCoursewareTabs(@Body() body: QueryCoursewareTypeDto) {
    return await this.coursewareTypeService.getAllCoursewareTabs(body);
  }

  @ApiOperation({ summary: '修改tab名称' })
  @Post('editCoursewareTab')
  async editCoursewareTab(@Body() body: UpdateCoursewareTypeDto) {
    return await this.coursewareTypeService.editCoursewareTab(body);
  }
}
