import { Injectable } from '@nestjs/common';
import { CreateCoursewaresDto } from './dto/create-coursewares.dto';
import { UpdateCoursewaresDto } from './dto/update-coursewares.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CoursewaresEntity } from './entities/coursewares.entity';
import { Repository } from 'typeorm';
import { ToolsService } from 'utils/tool';
import { STATECODE } from 'constant';
import { QueryCoursewaresDto } from './dto/query-coursewares.dto';

@Injectable()
export class CoursewaresService {
  constructor(
    @InjectRepository(CoursewaresEntity)
    private coursewaresRepository: Repository<CoursewaresEntity>,
  ) {}

  //查询是否存在
  async checkIsExist(body: QueryCoursewaresDto) {
    const res = await this.coursewaresRepository.findOne({
      where: { courseId: body.courseId },
    });
    if (ToolsService.isEmpty(res)) return false;
    else return true;
  }

  // 添加课件
  async addCourseware(body: CreateCoursewaresDto) {
    try {
      const res = await this.coursewaresRepository.save(body);
      return ToolsService.result('添加成功', res);
    } catch (e) {
      return ToolsService.result('添加失败', e.sqlMessage, e.sqlState);
    }
  }

  // 获取所有课件
  async getAllCoursewares(body: QueryCoursewaresDto) {
    try {
      const res = await this.coursewaresRepository.find();

      return ToolsService.result('查询成功', res);
    } catch (e) {
      return ToolsService.result('添加失败', e.sqlMessage, e.sqlState);
    }
  }

  //获取指定课件
  async getOneCourseware(body: QueryCoursewaresDto) {
    const res = await this.coursewaresRepository.findOne({
      where: { courseId: body.courseId },
    });
    console.log(res);
    if (!ToolsService.isEmpty(res)) {
      return ToolsService.result('查询成功', res);
    }
    return ToolsService.result('未查询到该课件', res, STATECODE.NOTFOUND);
  }

  //修改课件
  async editCourseware(body: UpdateCoursewaresDto) {
    try {
      console.log(body);
      const res = await this.coursewaresRepository.update(
        { courseId: body.courseId },
        body,
      );
      if (res.affected > 0) {
        return ToolsService.result('修改成功');
      }
    } catch (e) {
      console.log(e);
      return ToolsService.result('修改失败', e.sqlMessage, e.sqlState);
    }
  }
}
