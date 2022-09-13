import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Result } from '../common/result.interface';
import { Feedback } from './feedback.entity';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(@Inject(FeedbackService) private readonly feedbackService: FeedbackService) { }

  @Post()
  async createCat(@Body() feedback: Feedback): Promise<Result> {
    await this.feedbackService.createFeedback(feedback);
    return { code: 200, message: '创建成功' };
  }

  // @Delete(':id')
  // async deleteCat(@Param('id') id: number): Promise<Result> {
  //   await this.catService.deleteCat(id);
  //   return { code: 200, message: '删除成功' };
  // }

  // @Put(':id')
  // async updateCat(@Param('id') id: number, @Body() cat: Cat): Promise<Result> {
  //   await this.catService.updateCat(id, cat);
  //   return { code: 200, message: '更新成功' };
  // }

  @Get()
  async findOneFeedback(@Param('id') id: number): Promise<Result> {
    const data = await this.feedbackService.findOneFeedback(1);
    return { code: 200, message: '查询成功', data };
  }
  @Post()
  async createFeedback(@Body('id') id: number, @Body('title') title: string, @Body('content') content: string, @Body('time') time: string): Promise<Result> {
    this.feedbackService.createFeedback({ num: 1, id: id, title: title, content: content, time: time });
    return { code: 200, message: '反馈成功' }
  }
}
