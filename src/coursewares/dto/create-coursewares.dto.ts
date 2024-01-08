import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Column } from 'typeorm';
const uuid = require('node-uuid');
export class CreateCoursewaresDto {
  // @IsOptional() 可为空字段
  @ApiProperty({ description: '课件名称' })
  @IsString()
  @IsNotEmpty({ message: '课件名称不能为空' })
  title: string;

  @ApiProperty({ description: '课件id' })
  @IsString()
  @IsOptional()
  courseId: string = uuid.v1();

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
  @IsOptional()
  demonstrationPoster: string;

  @ApiProperty({ description: '示范课视频' })
  @IsString()
  @IsOptional()
  demonstrationVideo: string;

  @ApiProperty({ description: '详案指导封面' })
  @IsString()
  @IsOptional()
  guideVideo: string;

  @ApiProperty({ description: '详案指导视频' })
  @IsString()
  @IsOptional()
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
  @IsOptional()
  abstract: string;

  @ApiProperty({ description: '课件封面' })
  @IsString()
  poster: string;
}
