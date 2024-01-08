import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { ToolsService } from 'utils/tool';
import { CreateUserDto } from './dto/create-user.dto';
import { QueryUserDto } from './dto/query-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async checkUserIsExit(account: string) {
    const res = await this.userRepository.findOne({ where: { account } });
    if (ToolsService.isEmpty(res) || res?.ISLogOff == 1) return false;
    else return true;
  }

  async createUser(body: CreateUserDto) {
    const { account } = body;
    const isExist = await this.checkUserIsExit(account);
    if (isExist) {
      return ToolsService.result('该账号已存在');
    }

    const user = await this.userRepository.create(body);
    const res = await this.userRepository.save(user);

    if (res) {
      return ToolsService.result('创建成功');
    } else {
      console.log(res);
      return ToolsService.result('服务器错误');
    }
  }

  async login(body: QueryUserDto) {
    const isExist = await this.checkUserIsExit(body.account);
    if (!isExist) {
      return ToolsService.result('该账号尚未注册');
    }

    const res = await this.userRepository.findOne({
      where: { account: body.account },
    });
    if (bcrypt.compareSync(body.password, res?.password)) {
      return ToolsService.result('登陆成功', res);
    } else {
      return ToolsService.result('账号或密码错误');
    }
  }

  async updateUser(body: UpdateUserDto) {
    const user = await this.userRepository.create(body);
    const res = await this.userRepository.update(body.id, user);
    if (res?.affected > 0) {
      return ToolsService.result('修改成功');
    } else {
      console.log(res);
      return ToolsService.result('服务器错误');
    }
  }

  async deleteUser(body: DeleteUserDto) {
    const { id, account } = body;

    const isExist = await this.checkUserIsExit(account);
    if (!isExist) {
      return ToolsService.result('该用户不存在');
    }

    const res = await this.userRepository.update(id, { ISLogOff: 1 });
    if (res?.affected > 0) {
      return ToolsService.result('注销成功');
    } else {
      console.log(res);
      return ToolsService.result('服务器错误');
    } 
  }

  async queryUsers() {
    const res = await this.userRepository.find();
    return ToolsService.result('查询成功', res);
  }
}
