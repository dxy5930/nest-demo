import { Body, Catch, Injectable, UseInterceptors } from '@nestjs/common';
import { CreateCoursewareTypeDto } from './dto/create-courseware-type.dto';
import { UpdateCoursewareTypeDto } from './dto/update-courseware-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CoursewareTypeEntity } from './entities/courseware-type.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { QueryCoursewareTypeDto } from './dto/query-courseware-type.dto';
import { ToolsService } from 'utils/tool';
import { STATECODE } from 'constant';

@Injectable()
export class CoursewareTypeService {
  constructor(
    @InjectRepository(CoursewareTypeEntity)
    private coursewareTypeRepository: Repository<CoursewareTypeEntity>,
  ) {}

  //查询是否存在
  async checkIsExist(body: QueryCoursewareTypeDto) {
    const res = await this.coursewareTypeRepository.findOne({
      where: { courseType: body.courseType },
    });
    if (ToolsService.isEmpty(res)) return false;
    else return true;
  }

  //添加课件tab
  async addCoursewareTab(@Body() body: CreateCoursewareTypeDto) {
    try {
      const res = await this.coursewareTypeRepository.save(body);
      return ToolsService.result('添加成功');
    } catch (e) {
      return ToolsService.result('添加失败', e.sqlMessage, e.sqlState);
    }
  }

  //查询所有tabs
  async getAllCoursewareTabs(@Body() body: QueryCoursewareTypeDto) {
    const res = await this.coursewareTypeRepository.find({
      where: { courseType: body.courseType },
    });
    return ToolsService.result('查询成功', res);
  }

  //修改tab名称
  async editCoursewareTab(@Body() body: UpdateCoursewareTypeDto) {
    try {
      const res = await this.coursewareTypeRepository.update(
        { courseType: body.courseType },
        {
          tabName: body.tabName,
        },
      );
      if (res.affected > 0) {
        return ToolsService.result('修改成功');
      }
    } catch (e) {
      return ToolsService.result('添加失败', e.sqlMessage, e.sqlState);
    }
  }
}
