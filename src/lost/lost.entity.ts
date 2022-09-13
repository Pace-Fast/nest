import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lost')
export class Lost {
  /**
   * 自增主键
   */
  @PrimaryGeneratedColumn({
    comment: '自增ID',
  })
  id: number;

  /**
   * 丢失物品名称
   */
  @Column({
    comment: '丢失物品名称',
  })
  lostname: string;

  /**
   * 丢失物品图片
   */
  @Column('text',{
    comment: '丢失物品图片',
  })
  img: string;

   /**
   * 丢失物品描述
   */
    @Column('text',{
      comment: '丢失物品描述',
    })
    content: string;
}
