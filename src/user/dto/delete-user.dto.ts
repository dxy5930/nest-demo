import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class DeleteUserDto {
  @ApiProperty({ description: 'id' })
  @IsNumber()
  @IsNotEmpty({ message: 'id不为空' })
  id: number;

  @IsString()
  @IsNotEmpty({ message: 'account不为空' })
  account: string;
}
