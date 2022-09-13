import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('report')
export class Report {
  /**
   * 主键
   */
  @PrimaryColumn({
    comment: 'ID',
  })
  id: number;

  /**
   * 姓名
   */
  @Column({
    comment: '姓名',
  })
  name: string;

  /**
   * 位置
   */
  @Column({
    comment: '位置',
  })
  address: string;

  /**
   * 时间
   */
   @Column({
    comment: '时间',
  })
  time: string;

  /**
   * 体温是否正常
   */
   @Column({
    comment: '体温是否正常',
  })
  normal: string;

  /**
   * 昨日午检体温
   */
   @Column({
    comment: '昨日午检体温',
  })
  yes_noon_temp: string;

  /**
   * 昨日晚检体温
   */
   @Column({
    comment: '昨日晚检体温',
  })
  yes_night_temp: string;

  /**
   * 品种
   */
   @Column({
    comment: '今日晨检体温',
  })
  today_morning_temp: string;

  /**
   * 今日隔离情况
   */
   @Column({
    comment: '今日隔离情况',
  })
  isolation: string;
}
