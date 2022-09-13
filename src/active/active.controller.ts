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
import { Active } from './active.entity';
import { ActiveService } from './active.service';

@Controller('active')
export class ActiveController {
  constructor(@Inject(ActiveService) private readonly activeService: ActiveService) {}

  @Post('/create')
  async createCat(@Body('active') active: Active): Promise<Result> {
    await this.activeService.createCat(active);
    return { code: 200, message: '创建成功' };
  }

  @Post('/delete')
  async deleteCat(@Body('id') id: number): Promise<Result> {
    await this.activeService.deleteActive(id);
    return { code: 200, message: '删除成功' };
  }

  // @Put(':id')
  // async updateCat(@Param('id') id: number, @Body() cat: Cat): Promise<Result> {
  //   await this.catService.updateCat(id, cat);
  //   return { code: 200, message: '更新成功' };
  // }

  @Get('/select')
  async findOneActive(): Promise<Result> {
    const data = await this.activeService.findOneActive(1);
    return { code: 200, message: '查询成功', data };
  }
  @Get('/find')
  async findAll(): Promise<Result> {
    const data = await this.activeService.findAll();
    return { code: 200, message: '查询成功', data };
  }
}

