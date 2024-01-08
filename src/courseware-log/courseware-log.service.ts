import { Injectable } from '@nestjs/common';
import { CreateCoursewareLogDto } from './dto/create-courseware-log.dto';
import { ToolsService } from 'utils/tool';
import { InjectRepository } from '@nestjs/typeorm';
import { CoursewareLogEntity } from './entities/courseware-log.entity';
import { Repository } from 'typeorm';
const md5 = require('md5');

@Injectable()
export class CoursewareLogService {
  constructor(
    @InjectRepository(CoursewareLogEntity)
    private courseWareLogRepository: Repository<CoursewareLogEntity>,
  ) {}
  async coursewareList(body: CreateCoursewareLogDto) {
    const { sn, pkg, classScheme } = body;
    let token = md5(sn + pkg + classScheme + 'trUe');
    const res = await this.courseWareLogRepository.save(body);
    console.log(res);
    let params = {
      token,
    };
    if (!ToolsService.isEmpty(res)) {
      return ToolsService.result('success', params);
    } else {
      return ToolsService.result('服务器错误', res);
    }
  }
}
