import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class QueryCoursewareTypeDto {
  // @IsOptional() 可为空字段
  @ApiProperty({ description: '课件类型' })
  courseType: number;
}
