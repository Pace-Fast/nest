import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('apply')
export class Apply {
  /**
   * 主键
   */
  @PrimaryGeneratedColumn({
    comment: 'id',
  })
  id: number;

  /**
   * 理由
   */
  @Column({
    comment: '理由',
  })
  issue: string;

  /**
   * 交通方式
   */
  @Column({
    comment: '交通方式',
  })
  transport: string;

  /**
   * 地点
   */
  @Column({
    comment: '地点',
  })
  place: string;

  /**
   * 开始时间
   */
  @Column({
    comment: '开始时间',
  })
  start_time: string;

  /**
   * 结束时间
   */
  @Column({
    comment: '结束时间',
  })
  end_time: string;

  /**
   * 是否通过
   */
  @Column({
    comment: '是否通过',
  })
  isAdopt: string;
}
