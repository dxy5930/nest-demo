import { PartialType } from '@nestjs/mapped-types';
import { CreateEquipmentDto } from './create-equipment.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEquipmentDto extends PartialType(CreateEquipmentDto) {
  // @IsOptional() 可为空字段
  @ApiProperty({ description: 'sn码' })
  @IsString()
  @IsNotEmpty({ message: 'sn不能为空' })
  sn: string;

  @ApiProperty({ description: '设备类型' })
  @IsNotEmpty({ message: '设备类型不能为空' })
  @IsNumber()
  deviceType: number;
}
