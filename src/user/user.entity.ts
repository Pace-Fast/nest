import { Blob } from 'buffer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  /**
   * 自增主键
   */
  @PrimaryGeneratedColumn({
    comment: '自增ID',
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
   * 真实姓名
   */
  @Column({
    comment: '真实姓名',
  })
  name: string;

  /**
   * 密码
   */
  @Column({
    comment: '密码',
  })
  password: string;

  /**
   * 头像
   */
  @Column("text",{
    comment: '头像'
  })
  img: string;

  /**
   * 角色id
   */
  @Column({
    comment: '角色id'
  })
  role_id: string;

  /**
   * 疫苗接种情况
   */
   @Column({
    comment: '疫苗接种情况'
  })
  vaccination: string;
}
