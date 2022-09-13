import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Active } from './active.entity';

@Injectable()
export class ActiveService {
  constructor(
    @InjectRepository(Active) private readonly activeRepo: Repository<Active>, // 使用泛型注入对应类型的存储库实例
  ) {}

  /**
   * 创建
   *
   * @param active Active 实体对象
   */
  async createCat(active: Active): Promise<Active> {
    /**
     * 创建新的实体实例，并将此对象的所有实体属性复制到新实体中。 请注意，它仅复制实体模型中存在的属性。
     */
    // this.catRepo.create(cat);

    // 插入数据时，删除 id，以避免请求体内传入 id
    delete active.id;  
    return this.activeRepo.save(this.activeRepo.create(active));

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
  async deleteActive(id: number): Promise<void> {
    await this.findOneById(id);
    this.activeRepo.delete(id);
  }

  // /**
  //  * 更新
  //  *
  //  * @param active Active 实体对象
  //  */
  // async updateActive(id: number, active: Active): Promise<void> {
  //   const existActive = await this.findOneById(id);
  //   // 当传入空数据时，避免覆盖原数据
  //   existActive.nickname = active && active.nickname ? active.nickname : existActive.nickname;
  //   existActive.species = active && active.species ? active.species : existActive.species;
  //   this.activeRepo.save(existActive);
  // }

  /**
   * 根据ID查询
   *
   * @param id ID
   */
  async findOneActive(id: number): Promise<Active> {
    return this.findOneById(id);
  }

  /**
   * 根据ID查询单个信息，如果不存在则抛出404异常
   * @param id ID
   */
  private async findOneById(id: number): Promise<Active> {
    const activeInfo = await this.activeRepo.findOneBy({ id });
    if (!activeInfo) {
      throw new HttpException(`指定 id=${id} 的猫猫不存在`, 404);
    }
    return activeInfo;
  }
  /**
   * 查询整个表信息
   */
  async findAll(): Promise<Active[]> {
    const lostInfo = await this.activeRepo.find();
    return lostInfo;
  }
}
