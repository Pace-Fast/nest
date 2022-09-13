import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Shower } from './shower.entity';

@Injectable()
export class ShowerService {
  constructor(
    @InjectRepository(Shower) private readonly showerRepo: Repository<Shower>, // 使用泛型注入对应类型的存储库实例
  ) {}

  /**
   * 创建
   *
   * @param shower Shower 实体对象
   */
  async createShower(shower: Shower): Promise<Shower> {
    /**
     * 创建新的实体实例，并将此对象的所有实体属性复制到新实体中。 请注意，它仅复制实体模型中存在的属性。
     */
    // this.catRepo.create(cat);

    // 插入数据时，删除 id，以避免请求体内传入 id
    delete shower.id;
    return this.showerRepo.save(this.showerRepo.create(shower));

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
  async deleteShower(id: number): Promise<void> {
    await this.findOneById(id);
    this.showerRepo.delete(id);
  }

  /**
   * 更新
   *
   * @param shower Shower 实体对象
   */
  async updateShower(id: number, shower: Shower): Promise<void> {
    const existShower = await this.findOneById(id);
    // 当传入空数据时，避免覆盖原数据
    existShower.free = shower && shower.free ? shower.free : existShower.free;
    existShower.damage = shower && shower.damage ? shower.damage : existShower.damage;
    this.showerRepo.save(existShower);
  }

  /**
   * 根据ID查询
   *
   * @param id ID
   */
  async findOneShower(id: number): Promise<Shower> {
    return this.findOneById(id);
  }

  /**
   * 根据ID查询单个信息，如果不存在则抛出404异常
   * @param id ID
   */
  private async findOneById(id: number): Promise<Shower> {
    const showerInfo = await this.showerRepo.findOneBy({ id });
    if (!showerInfo) {
      throw new HttpException(`指定 id=${id} 的猫猫不存在`, 404);
    }
    return showerInfo;
  }

  async findAll(): Promise<Shower[]> {
    const showerInfo = await this.showerRepo.find();
    return showerInfo;
  }
}
