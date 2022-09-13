import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('nuclein')
export class Nuclein {
  /**
   * 主键
   */
  @PrimaryColumn({
    comment: 'ID',
  })
  id: number;

  /**
   * 用户名
   */
  @Column({
    comment: '用户名',
  })
  username: string;

  /**
   * 姓名
   */
  @Column({
    comment: '姓名',
  })
  name: string;

   /**
   * 班级
   */
    @Column({
      comment: '班级',
    })
    class: string;

  /**
   * 是否做今日核酸
   */
   @Column({
    comment: '是否做今日核酸',
  })
  isPlay: string;

  /**
   * 核酸截图
   */
   @Column('text',{
    comment: '核酸截图',
  })
  img: string;
}
