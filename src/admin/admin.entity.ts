import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('admin')
export class Admin {
  /**
   * 自增主键
   */
  @PrimaryGeneratedColumn({
    comment: '自增ID',
  })
  id: number;

  /**
   * 昵称
   */
  @Column({
    comment: '用户名',
  })
  username: string;

  /**
   * 品种
   */
  @Column({
    comment: '品种',
  })
  passward: string;
}
