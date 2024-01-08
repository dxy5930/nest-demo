import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
@Entity('equipments')
@Unique(['sn'])
export class EquipmentEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '自增id' })
  id: number;

  @Column({ type: 'varchar', name: 'sn', comment: 'sn码' })
  sn: string;

  @Column({
    type: 'int',
    name: 'deviceType',
    comment: '设备类型,0:测试，1:销售，2:演示',
    default: 0,
  })
  deviceType: number;

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

  @Column({
    type: 'text',
    default: '',
    name: 'notes',
    comment: '备注',
  })
  notes: string;
}
