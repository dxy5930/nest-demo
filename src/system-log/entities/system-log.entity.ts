import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

//系统日志表
@Entity({ name: 'systemLogger' })
export class SystemLogEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '自增id' })
  id: number;

  @Column({ type: 'varchar', name: 'sn', comment: 'sn码' })
  sn: string;

  @Column({ type: 'varchar', name: 'ip', comment: 'ip' })
  ip: string;

  @Column({
    type: 'varchar',
    name: 'status',
    comment: '状态',
  })
  status: string;

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
