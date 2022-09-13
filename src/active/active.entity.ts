import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('active')
export class Active {
  /**
   * 自增主键
   */
  @PrimaryGeneratedColumn({
    comment: '自增ID',
  })
  id: number;

  /**
   * 标题
   */
  @Column({
    comment: '标题',
  })
  title: string;

  /**
   * 内容
   */
  @Column({
    comment: '内容',
  })
  content: string;
}
