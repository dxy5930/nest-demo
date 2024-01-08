import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateSystemLogDto {
  // @IsOptional() 可为空字段
  @ApiProperty({ description: 'sn码' })
  @IsString()
  @IsNotEmpty({ message: 'sn不能为空' })
  sn: string;

  @ApiProperty({ description: '状态' })
  @IsNotEmpty({ message: '状态不能为空' })
  @IsString()
  status: string;

  @ApiProperty({ description: 'ip' })
  @IsString()
  ip: string;
}
