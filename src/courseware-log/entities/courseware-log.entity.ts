import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

//课件日志表
@Entity({ name: 'coursewareLogger' })
export class CoursewareLogEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '自增id' })
  id: number;

  @Column({ type: 'varchar', name: 'sn', comment: 'sn码' })
  sn: string;

  @Column({ type: 'varchar', name: 'pkg', comment: '包名' })
  pkg: string;

  @Column({
    type: 'varchar',
    name: 'classScheme',
    comment: 'scheme',
    default: null,
  })
  classScheme: any;

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
