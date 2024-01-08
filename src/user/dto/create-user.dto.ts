import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  // @IsOptional() 可为空字段
  @ApiProperty({ description: '用户名' })
  @IsString()
  @IsNotEmpty({ message: '用户名不为空' })
  name: string;

  @ApiProperty({ description: '账号' })
  @IsNotEmpty({ message: '账号不为空' })
  @IsString()
  account: string;

  @ApiProperty({ description: '密码' })
  @IsNotEmpty({ message: '密码不为空' })
  @IsString()
  password: string;
}
