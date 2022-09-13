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
import { Nuclein } from './nuclein.entity';
import { NucleinService } from './nuclein.service';

@Controller('nuclein')
export class NucleinController {
  constructor(@Inject(NucleinService) private readonly nucleinService: NucleinService) {}

  @Post('/create')
  async createCat(@Body('nuclein') nuclein: Nuclein): Promise<Result> {
    await this.nucleinService.createNuclein(nuclein);
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

  @Get()
  async findOneCat(@Param('id') id: number): Promise<Result> {
    const data = await this.nucleinService.findOneNuclein(1);
    return { code: 200, message: '查询成功', data };
  }
  @Get('/select')
  async findAll(): Promise<Result> {
    const data = await this.nucleinService.findAll();
    return { code: 200, message: '查询成功', data };
  }
}
