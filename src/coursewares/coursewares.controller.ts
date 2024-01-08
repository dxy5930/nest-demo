import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CoursewaresService } from './coursewares.service';
import { CreateCoursewaresDto } from './dto/create-coursewares.dto';
import { UpdateCoursewaresDto } from './dto/update-coursewares.dto';
import { ApiOperation } from '@nestjs/swagger';
import { QueryCoursewaresDto } from './dto/query-coursewares.dto';

@Controller('v1')
export class CoursewaresController {
  constructor(private readonly coursewaresService: CoursewaresService) {}

  @ApiOperation({ summary: '添加课件' })
  @Post('addCourseware')
  async addCourseware(@Body() body: CreateCoursewaresDto) {
    return await this.coursewaresService.addCourseware(body);
  }

  @ApiOperation({ summary: '查询所有课件' })
  @Post('getAllCoursewares')
  async getAllCOursewares(@Body() body: QueryCoursewaresDto) {
    return await this.coursewaresService.getAllCoursewares(body);
  }

  @ApiOperation({ summary: '查询指定课件' })
  @Post('getOneCourseware')
  async getOneCourseware(@Body() body: QueryCoursewaresDto) {
    return await this.coursewaresService.getOneCourseware(body);
  }

  @ApiOperation({ summary: '修改课件' })
  @Post('editCourseware')
  async editCourseware(@Body() body: UpdateCoursewaresDto) {
    return await this.coursewaresService.editCourseware(body);
  }
}
