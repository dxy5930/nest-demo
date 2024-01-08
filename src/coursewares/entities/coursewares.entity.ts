import { CoursewareTypeEntity } from 'src/courseware-type/entities/courseware-type.entity';
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
@Entity('coursewares')
@Unique(['title'])
export class CoursewaresEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', comment: '自增id' })
  id: number;

  @Column({
    type: 'varchar',
    name: 'courseId',
    comment: '课件类型id',
    default: uuid.v1(),
  })
  courseId: string;

  @Column({
    type: 'varchar',
    name: 'title',
    comment: '课件名称',
    default: '',
  })
  title: string;

  @Column({
    type: 'int',
    name: 'courseType',
    comment: '课件类型',
    default: 0,
  })
  courseType: number;

  @Column({
    type: 'int',
    name: 'grade',
    comment: '年级。1:大班，2:中班，3:小班',
    default: 0,
  })
  grade: number;

  @Column({
    type: 'timestamp',
    name: 'create_time',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;

  @Column({
    type: 'varchar',
    name: 'demonstrationPoster',
    comment: '示范课封面',
    default: '',
  })
  demonstrationPoster: string;

  @Column({
    type: 'varchar',
    name: 'demonstrationVideo',
    comment: '示范课视频',
    default: '',
  })
  demonstrationVideo: string;

  @Column({
    type: 'varchar',
    name: 'guideVideo',
    comment: '详案指导视频',
    default: '',
  })
  guideVideo: string;

  @Column({
    type: 'varchar',
    name: 'guidePoster',
    comment: '详案指导封面',
    default: '',
  })
  guidePoster: string;

  @Column({
    type: 'varchar',
    name: 'package',
    comment: '课件包名',
    default: '',
  })
  package: string;

  @Column({
    type: 'varchar',
    name: 'classScheme',
    comment: '课件scheme',
    default: '',
  })
  classScheme: string;

  @Column({
    type: 'text',
    name: 'abstract',
    comment: '课件介绍',
    default: '',
  })
  abstract: string;

  @Column({
    type: 'varchar',
    name: 'poster',
    comment: '课件封面图',
    default: '',
  })
  poster: string;

  @Column({
    type: 'boolean',
    name: 'isDelete',
    comment: '是否删除',
    default: false,
  })
  isDelete: boolean;

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
