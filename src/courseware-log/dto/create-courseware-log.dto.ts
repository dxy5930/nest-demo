import { ApiBody, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateCoursewareLogDto {
  // @IsOptional() 可为空字段
  @ApiProperty({ description: 'sn码' })
  @IsString()
  @IsNotEmpty({ message: 'sn不能为空' })
  sn: string;

  @ApiProperty({ description: '包名' })
  @IsNotEmpty({ message: '包名不能为空' })
  @IsString()
  pkg: string;

  @ApiProperty({ description: 'classScheme' })
  @IsString()
  @IsOptional()
  classScheme: any;
}
