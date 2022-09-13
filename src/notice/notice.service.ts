import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Notice } from './notice.entity';

@Injectable()
export class NoticeService {
  constructor(
    @InjectRepository(Notice) private readonly noticeRepo: Repository<Notice>, // 使用泛型注入对应类型的存储库实例
  ) {}

  /**
   * 创建
   *
   * @param notice Notice 实体对象
   */
  async createNotice(notice: Notice): Promise<Notice> {
    /**
     * 创建新的实体实例，并将此对象的所有实体属性复制到新实体中。 请注意，它仅复制实体模型中存在的属性。
     */
    // this.noticeRepo.create(cat);

    // 插入数据时，删除 id，以避免请求体内传入 id
    return this.noticeRepo.save(this.noticeRepo.create(notice));

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
  async deleteNotice(id: number): Promise<void> {
    await this.findOneById(id);
    this.noticeRepo.delete(id);
  }

  /**
   * 更新
   *
   * @param notice Notice 实体对象
   */
  async updateNotice(id: number, notice: Notice): Promise<void> {
    const existNotice = await this.findOneById(id);
    // 当传入空数据时，避免覆盖原数据
    existNotice.title = notice && notice.title ? notice.title : existNotice.title;
    existNotice.time = notice && notice.time ? notice.time : existNotice.time;
    this.noticeRepo.save(existNotice);
  }

  /**
   * 根据ID查询
   *
   * @param id ID
   */
  async findOneNotice(id: number): Promise<Notice> {
    return this.findOneById(id);
  }

  /**
   * 根据ID查询单个信息，如果不存在则抛出404异常
   * @param id ID
   */
  private async findOneById(id: number): Promise<Notice> {
    const noticeInfo = await this.noticeRepo.findOneBy({ id });
    if (!noticeInfo) {
      throw new HttpException(`指定 id=${id} 的猫猫不存在`, 404);
    }
    return noticeInfo;
  }
}
