import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('notice')
export class Notice {
  /**
   * 自增主键
   */
  @PrimaryGeneratedColumn({
    comment: '自增ID',
  })
  id: number;

  /**
   * 公告
   */
  @Column({
    comment: '公告',
  })
  title: string;

  /**
   * 时间
   */
  @Column({
    comment: '时间',
  })
  time: string;
}
