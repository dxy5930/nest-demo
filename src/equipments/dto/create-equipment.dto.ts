import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateEquipmentDto {
  // @IsOptional() 可为空字段
  @ApiProperty({ description: 'sn码' })
  @IsString()
  @IsNotEmpty({ message: 'sn不能为空' })
  sn: string;

  @ApiProperty({ description: '设备类型' })
  @IsNotEmpty({ message: '设备类型不能为空' })
  @IsNumber()
  deviceType: number;

  @ApiProperty({ description: '备注' })
  @IsString()
  @IsOptional()
  notes: string;
}
