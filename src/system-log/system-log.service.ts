import { Injectable } from '@nestjs/common';
import { CreateSystemLogDto } from './dto/create-system-log.dto';
import { UpdateSystemLogDto } from './dto/update-system-log.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SystemLogEntity } from './entities/system-log.entity';
import { ToolsService } from 'utils/tool';

@Injectable()
export class SystemLogService {
  constructor(
    @InjectRepository(SystemLogEntity)
    private systemLogRepository: Repository<SystemLogEntity>,
  ) {}

  async inertSystemLog(body: CreateSystemLogDto) {
    const res = await this.systemLogRepository.save(body);
    if (!ToolsService.isEmpty(res)) {
      return ToolsService.result('success');
    } else {
      return ToolsService.result('服务器错误');
    }
  }
}
