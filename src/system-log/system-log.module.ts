import { Module } from '@nestjs/common';
import { SystemLogService } from './system-log.service';
import { SystemLogController } from './system-log.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemLogEntity } from './entities/system-log.entity';

@Module({
  controllers: [SystemLogController],
  providers: [SystemLogService],
  imports: [TypeOrmModule.forFeature([SystemLogEntity])],
})
export class SystemLogModule {}
