import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>, // 使用泛型注入对应类型的存储库实例
  ) {}

  /**
   * 创建
   *
   * @param user User 实体对象
   */
  async createUser(user: User): Promise<User> {
    /**
     * 创建新的实体实例，并将此对象的所有实体属性复制到新实体中。 请注意，它仅复制实体模型中存在的属性。
     */
    // this.catRepo.create(cat);

    // 插入数据时，删除 id，以避免请求体内传入 id
    delete user.id;
    return this.userRepo.save(this.userRepo.create(user));

    /**
     * 将给定实体插入数据库。与save方法不同，执行原始操作时不包括级联，关系和其他操作。
     * 执行快速有效的INSERT操作。不检查数据库中是否存在实体，因此如果插入重复实体，本次操作将失败。
     */
    // await this.catRepo.insert(cat);
  }

  /**
   * 删除
   *
   * @param id ID
   */
  async deleteUser(id: number): Promise<void> {
    await this.findOneById(id);
    this.userRepo.delete(id);
  }
  
  /**
   * 更新
   *
   * @param user User 实体对象
   */
  async updateUser(id: number, user: User): Promise<void> {
    const existUser = await this.findOneById(id);
    // 当传入空数据时，避免覆盖原数据
    existUser.username = user && user.username ? user.username : existUser.username;
    existUser.name = user && user.name ? user.name : existUser.name;
    existUser.password = user && user.password ? user.password : existUser.password;
    existUser.img = user && user.img ? user.img : existUser.img;
    existUser.role_id = user && user.role_id ? user.role_id : existUser.role_id;
    existUser.vaccination = user && user.vaccination ? user.vaccination : existUser.vaccination;
    this.userRepo.save(existUser);
  }

  /**
   * 根据ID查询
   *
   * @param id ID
   */
  async findOneUser(id: number): Promise<User> {
    return this.findOneById(id);
  }

  /**
   * 根据ID查询单个信息，如果不存在则抛出404异常
   * @param id ID
   */
  private async findOneById(id: number): Promise<User> {
    const userInfo = await this.userRepo.findOneBy({ id });
    if (!userInfo) {
      throw new HttpException(`指定 id=${id} 的猫猫不存在`, 404);
    }
    return userInfo;
  }

   /**
   * 根据username查询
   *
   * @param username Username
   */
    async loginSelect(username: string): Promise<User> {
      return this.findOneByUsername(username);
    }

    async personSelect(username: string): Promise<User> {
      return this.findOneByUsername(username);
    }

    async pwdSelect(username: string): Promise<User> {
      return this.findOneByUsername(username);
    }

  
  /**
   * 根据username查询单个信息，如果不存在则抛出404异常
   * @param username Username
   */
   private async findOneByUsername(username: string): Promise<User> {
     
    const userInfo = await this.userRepo.findOneBy({ username });
    if (!userInfo) {
      throw new HttpException(`指定 username=${username} 的猫猫不存在`, 404);
    }
    return userInfo;
  }
   /**
   * 查询整个表信息
   */
    async findAll(): Promise<User[]> {
      const lostInfo = await this.userRepo.find();
      return lostInfo;
    }

}
