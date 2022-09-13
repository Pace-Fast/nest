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
import { Apply } from './apply.entity';
import { ApplyService } from './apply.service';

@Controller('apply')
export class ApplyController {
  constructor(@Inject(ApplyService) private readonly applyService: ApplyService) { }

  @Post('/applySub')
  async createApply(@Body('apply') apply: Apply): Promise<Result> {
    await this.applyService.createApply(apply);
    return { code: 200, message: '创建成功' };
  }

  // @Delete(':id')
  // async deleteCat(@Param('id') id: number): Promise<Result> {
  //   await this.applyService.deleteCat(id);
  //   return { code: 200, message: '删除成功' };
  // }

  // @Put(':id')
  // async updateCat(@Param('id') id: number, @Body() cat: Cat): Promise<Result> {
  //   await this.applyService.updateCat(id, cat);
  //   return { code: 200, message: '更新成功' };
  // }

  @Post('/find')
  async findOneApply(@Body('id') id: number): Promise<Result> {
    const data = await this.applyService.findOneApply(id);
    return { code: 200, message: '查询成功', data };
  }
  @Get('/select')
  async findAll(): Promise<Result> {
    const data = await this.applyService.findAll();
    return { code: 200, message: '查询成功', data };
  }
}
