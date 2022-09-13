import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('volunteer')
export class Volunteer {
  /**
   * 自增主键
   */
  @PrimaryGeneratedColumn({
    comment: '自增ID',
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
   * 校区
   */
  @Column({
    comment: '校区',
  })
  campus: string;

   /**
   * 经验
   */
    @Column({
      comment: '经验',
    })
    experience: string;

    /**
   * 联系方式
   */
     @Column({
      comment: '联系方式',
    })
    information: string;
    /**
     * 申请活动
     */
     @Column({
      comment: '申请活动',
    })
    active: string;
}
