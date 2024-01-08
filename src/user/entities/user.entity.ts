import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
const uuid = require('node-uuid');
import * as bcrypt from 'bcryptjs';
import { HASH_SALT } from '../../../constant/index';
//user表
@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '自增id' })
  id: number;

  @Column({
    type: 'varchar',
    default: uuid.v1(),
    name: 'uid',
    comment: '用户id',
  })
  uid: string;

  @Column({ type: 'varchar', name: 'name', comment: '用户名称' })
  name: string;

  @Column({ type: 'varchar', name: 'account', comment: '用户账号' })
  account: string;

  @BeforeInsert() async hashPsd() {
    this.password = await bcrypt.hash(this.password, HASH_SALT);
  }
  @BeforeUpdate() async hashPassword() {
    this.password = await bcrypt.hash(this.password, HASH_SALT);
  }
  @Column({ type: 'varchar', name: 'password', comment: '用户密码' })
  password: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'create_time',
    comment: '创建时间',
    nullable: false,
  })
  c_time: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    name: 'update_time',
    comment: '更新时间',
    nullable: false,
  })
  updateTime: Date;

  @Column({
    type: 'boolean',
    name: 'isDelete',
    comment: '是否删除',
    default: false,
  })
  isDelete: boolean;

  @Column({
    type: 'int',
    default: 0,
    name: 'isLogOff',
    comment: '是否注销(0:否，1:是)',
  })
  ISLogOff: number;
}
