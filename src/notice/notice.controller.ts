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
import { Notice } from './notice.entity';
import { NoticeService } from './notice.service';

@Controller('notice')
export class NoticeController {
  constructor(@Inject(NoticeService) private readonly noticeService: NoticeService) {}

  @Post('updata')
  async createNotice(@Body('Notice') Notice: Notice): Promise<Result> {
    await this.noticeService.createNotice(Notice);
    return { code: 200, message: '创建成功' };
  }

  @Post('/delete')
  async deleteNotice(@Body('id') id: number): Promise<Result> {
    await this.noticeService.deleteNotice(id);
    return { code: 200, message: '删除成功' };
  }

  // @Put(':id')
  // async updateNotice(@Param('id') id: number, @Body() notice: Notice): Promise<Result> {
  //   await this.noticeService.updateNotice(id, notice);
  //   return { code: 200, message: '更新成功' };
  // }

  @Get('')
  async findOneNotice(): Promise<Result> {
    const notice1 = await this.noticeService.findOneNotice(1);
    const notice2 = await this.noticeService.findOneNotice(2);
    const notice3 = await this.noticeService.findOneNotice(3);
    const data = [notice1,notice2,notice3];
    return { code: 200, message: '查询成功', data };
  }
}
