import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('shower')
export class Shower {
  /**
   * 自增主键
   */
  @PrimaryColumn({
    comment: '自增ID',
  })
  id: number;

  /**
   * 是否空闲
   */
  @Column({
    comment: '是否空闲',
  })
  free: string;

  /**
   * 是否损坏
   */
  @Column({
    comment: '是否损坏',
  })
  damage: string;
}
