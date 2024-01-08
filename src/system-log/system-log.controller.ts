import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SystemLogService } from './system-log.service';
import { CreateSystemLogDto } from './dto/create-system-log.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('systemLog-系统日志')
@Controller('v1')
export class SystemLogController {
  constructor(private readonly systemLogService: SystemLogService) {}

  @ApiOperation({ summary: '添加系统日志' })
  @Post('syslog')
  async inertSystemLog(@Body() body: CreateSystemLogDto) {
    return await this.systemLogService.inertSystemLog(body);
  }
}
