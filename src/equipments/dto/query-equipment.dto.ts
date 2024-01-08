import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class QueryEquipmentDto {
  // @IsOptional() 可为空字段
  @ApiProperty({ description: 'sn码' })
  @IsString()
  @IsOptional()
  sn: string;
}
