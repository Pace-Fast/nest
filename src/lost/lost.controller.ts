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
import { Lost } from './lost.entity';
import { LostService } from './lost.service';

@Controller('lost')
export class LostController {
  constructor(@Inject(LostService) private readonly lostService: LostService) {}

  @Post('/submit')
  async createCat(@Body('lost') lost: Lost): Promise<Result> {
    await this.lostService.createLost(lost);
    return { code: 200, message: '提交成功' };
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

  @Get('/select')
  async findAll(): Promise<Result> {
    const data = await this.lostService.findAll();
    return { code: 200, message: '查询成功', data };
  }
}
