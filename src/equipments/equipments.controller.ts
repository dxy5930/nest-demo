import { Controller, Post, Body } from '@nestjs/common';
import { EquipmentsService } from './equipments.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { QueryEquipmentDto } from './dto/query-equipment.dto';
import { EquipmentEntity } from './entities/equipment.entity';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
@ApiTags('equipments-设备')
@Controller('v1')
export class EquipmentsController {
  constructor(private readonly equipmentsService: EquipmentsService) {}

  @ApiOperation({ summary: '添加设备' })
  @Post('addEquipment')
  async addEquipments(@Body() body: CreateEquipmentDto) {
    return await this.equipmentsService.addEquipment(body);
  }

  @ApiOperation({ summary: '查询设备列表' })
  @Post('getAllEquipments')
  async getAllEquipments(@Body() body: QueryEquipmentDto) {
    return await this.equipmentsService.getAllEquipments(body);
  }

  @ApiOperation({ summary: '查询单个设备' })
  @Post('getOneEquipment')
  async getOneEquipment(@Body() body: QueryEquipmentDto) {
    return await this.equipmentsService.getOneEquipment(body);
  }

  @ApiOperation({ summary: '修改设备' })
  @Post('editEquipment')
  async editEquipment(@Body() body: UpdateEquipmentDto) {
    return await this.equipmentsService.editEquipment(body);
  }
}
