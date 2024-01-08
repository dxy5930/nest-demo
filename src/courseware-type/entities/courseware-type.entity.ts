import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
const uuid = require('node-uuid');
@Entity('coursewareType')
@Unique(['courseType'])
export class CoursewareTypeEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '自增id' })
  id: number;

  @Column({
    type: 'int',
    name: 'courseType',
    comment: '类型id',
    default: 0,
  })
  courseType: number;

  @Column({
    type: 'varchar',
    name: 'tabName',
    comment: '类型名称',
    default: '',
  })
  tabName: string;

  @Column({
    type: 'boolean',
    name: 'isDelete',
    comment: '是否删除',
    default: false,
  })
  isDelete: boolean;

  @Column({
    type: 'timestamp',
    name: 'create_time',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    name: 'update_time',
    comment: '更新时间',
    nullable: false,
  })
  updateTime: Date;
}
