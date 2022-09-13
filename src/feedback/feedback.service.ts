import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Feedback } from './feedback.entity';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback) private readonly feedbackRepo: Repository<Feedback>, // 使用泛型注入对应类型的存储库实例
  ) {}

  /**
   * 创建
   *
   * @param feedback Feedback 实体对象
   */
  async createFeedback(feedback: Feedback): Promise<Feedback> {
    /**
     * 创建新的实体实例，并将此对象的所有实体属性复制到新实体中。 请注意，它仅复制实体模型中存在的属性。
     */
    // this.feedbackRepo.create(feedback);

    // 插入数据时，删除 num，以避免请求体内传入 num
    delete feedback.num;
    return this.feedbackRepo.save(this.feedbackRepo.create(feedback));

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
  async deleteFeedback(id: number): Promise<void> {
    await this.findOneById(id);
    this.feedbackRepo.delete(id);
  }

  /**
   * 更新
   *
   * @param feedback Feedback 实体对象
   */
  // async updateFeedback(id: number, feedback: Feedback): Promise<void> {
  //   const existFeedback = await this.findOneById(id);
  //   // 当传入空数据时，避免覆盖原数据
  //   existFeedback.nickname = feedback && feedback.nickname ? feedback.nickname : existFeedback.nickname;
  //   existFeedback.species = feedback && feedback.species ? feedback.species : existFeedback.species;
  //   this.feedbackRepo.save(existFeedback);
  // }

  /**
   * 根据ID查询
   *
   * @param id ID
   */
  async findOneFeedback(id: number): Promise<Feedback> {
    return this.findOneById(id);
  }

  /**
   * 根据ID查询单个信息，如果不存在则抛出404异常
   * @param id ID
   */
  private async findOneById(id: number): Promise<Feedback> {
    const feedbackInfo = await this.feedbackRepo.findOneBy({ id });
    if (!feedbackInfo) {
      throw new HttpException(`指定 id=${id} 的猫猫不存在`, 404);
    }
    return feedbackInfo;
  }
}
