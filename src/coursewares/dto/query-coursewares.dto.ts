import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class QueryCoursewaresDto {
  // @IsOptional() 可为空字段
  @ApiProperty({ description: '课件名称' })
  @IsOptional()
  title: string;

  @ApiProperty({ description: '课件id' })
  @IsOptional()
  readonly courseId: string;
}
