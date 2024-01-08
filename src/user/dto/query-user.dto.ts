import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class QueryUserDto {
  @ApiProperty({ description: '账号' })
  @IsString()
  account: string;

  @ApiProperty({ description: '密码' })
  @IsString()
  password: string;
}
