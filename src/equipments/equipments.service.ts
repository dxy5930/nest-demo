import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EquipmentEntity } from './entities/equipment.entity';
import { Repository } from 'typeorm';
import { ToolsService } from 'utils/tool';
import { QueryEquipmentDto } from './dto/query-equipment.dto';
import { STATECODE } from 'constant';
import { ApiOperation } from '@nestjs/swagger';

@Injectable()
export class EquipmentsService {
  constructor(
    @InjectRepository(EquipmentEntity)
    private equipmentRepository: Repository<EquipmentEntity>,
  ) {}

  //查询是否存在
  async checkIsExist(body: QueryEquipmentDto) {
    const queryRes = await this.equipmentRepository.findOne({
      where: { sn: body.sn },
    });
    if (ToolsService.isEmpty(queryRes)) return false;
    else return true;
  }

  //添加设备
  async addEquipment(body: CreateEquipmentDto) {
    const queryRes = await this.checkIsExist(body);

    if (queryRes) {
      return ToolsService.result('该设备已存在', null, STATECODE.REPEAT);
    }
    await this.equipmentRepository.save(body);
    return ToolsService.result('添加成功');
  }

  //获取所有设备
  async getAllEquipments(body: QueryEquipmentDto) {
    const res = await this.equipmentRepository.find({
      where: { sn: body.sn },
    });
    return ToolsService.result('查询成功', res);
  }

  // 获取指定设备
  async getOneEquipment(body: QueryEquipmentDto) {
    const res = await this.equipmentRepository.findOne({
      where: body,
    });
    return ToolsService.result('查询成功', res);
  }

  //修改设备类型
  async editEquipment(body: UpdateEquipmentDto) {
    try {
      const res = await this.equipmentRepository.update({ sn: body.sn }, body);

      if (res?.affected > 0) {
        return ToolsService.result('修改成功');
      }
    } catch (e) {
      return ToolsService.result('修改失败', e.sqlMessage, e.sqlState);
    }
  }
}
