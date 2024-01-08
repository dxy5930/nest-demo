import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ description: 'id' })
  @IsString()
  @IsNotEmpty({ message: 'id不为空' })
  id: number;

  @ApiProperty({ description: '名字' })
  @IsString()
  name: string;

  @ApiProperty({ description: '密码' })
  @IsString()
  password: string;
}
