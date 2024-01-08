import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueryUserDto } from './dto/query-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('v1')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signUp')
  async create(@Body() body: CreateUserDto) {
    return await this.userService.createUser(body);
  }

  @Post('/signIn')
  async login(@Body() body: QueryUserDto) {
    return await this.userService.login(body);
  }

  @Post('/updateUser')
  async updateUser(@Body() body: UpdateUserDto) {
    return await this.userService.updateUser(body);
  }

  @Post('/deleteUser')
  async deleteUser(@Body() body: DeleteUserDto) {
    return await this.userService.deleteUser(body);
  }

  @Get('/AllUsers')
  async queryUsers() {
    return await this.userService.queryUsers();
  }
}
