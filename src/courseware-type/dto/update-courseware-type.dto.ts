import { PartialType } from '@nestjs/mapped-types';
import { CreateCoursewareTypeDto } from './create-courseware-type.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateCoursewareTypeDto extends PartialType(
  CreateCoursewareTypeDto,
) {
  // @IsOptional() 可为空字段
  @ApiProperty({ description: '课件类型名称' })
  @IsString()
  @IsNotEmpty({ message: '课件类型名称不能为空' })
  tabName: string;

  @ApiProperty({ description: '课件类型' })
  @IsNumber()
  @IsNotEmpty({ message: '课件类型不能为空' })
  courseType: number;
}
