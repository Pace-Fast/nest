import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('feedback')
export class Feedback {

  /**
   * num
   */
  @PrimaryGeneratedColumn({
    comment:'主键自增序列'
  })
  num:number

  /**
   * id
   */
  @Column({
    comment: 'ID',
  })
  id: number;

  /**
   * 反馈标题
   */
  @Column({
    comment: '反馈标题',
  })
  title: string;

  /**
   * 反馈内容
   */
  @Column({
    comment: '反馈内容',
  })
  content: string;

   /**
   * 反馈时间
   */
    @Column({
      comment: '反馈时间',
    })
    time: string;
}
