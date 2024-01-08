import { PartialType } from '@nestjs/mapped-types';
import { CreateCoursewaresDto } from './create-coursewares.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
const uuid = require('node-uuid');
export class UpdateCoursewaresDto extends PartialType(CreateCoursewaresDto) {
  // @IsOptional() 可为空字段
  @ApiProperty({ description: '课件名称' })
  @IsString()
  @IsNotEmpty({ message: '课件名称不能为空' })
  title: string;

  @ApiProperty({ description: '课件类型' })
  @IsNotEmpty({ message: '课件类型不能为空' })
  @IsNumber()
  courseType: number;

  @ApiProperty({ description: '年级' })
  @IsNotEmpty({ message: '年级不能为空' })
  @IsNumber()
  grade: number;

  @ApiProperty({ description: '示范课封面' })
  @IsString()
  @IsNotEmpty({ message: '示范课封面不能为空' })
  demonstrationPoster: string;

  @ApiProperty({ description: '示范课视频' })
  @IsString()
  @IsNotEmpty({ message: '示范课视频不能为空' })
  demonstrationVideo: string;

  @ApiProperty({ description: '详案指导封面' })
  @IsString()
  @IsNotEmpty({ message: '详案指导封面不能为空' })
  guideVideo: string;

  @ApiProperty({ description: '详案指导视频' })
  @IsString()
  @IsNotEmpty({ message: '详案指导视频不能为空' })
  guidePoster: string;

  @ApiProperty({ description: '包名' })
  @IsString()
  @IsNotEmpty({ message: 'package不能为空' })
  package: string;

  @ApiProperty({ description: 'scheme' })
  @IsString()
  @IsNotEmpty({ message: 'scheme不能为空' })
  classScheme: string;

  @ApiProperty({ description: '课件简介' })
  @IsString()
  @IsNotEmpty({ message: '课件简介不能为空' })
  abstract: string;

  @ApiProperty({ description: '课件封面' })
  @IsString()
  @IsNotEmpty({ message: '课件封面不能为空' })
  poster: string;

  @ApiProperty({ description: '是否删除' })
  @IsBoolean()
  isDelete: boolean;
}
