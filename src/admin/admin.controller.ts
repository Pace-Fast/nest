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
import { Admin } from './admin.entity';
import { AdminService } from './admin.service';

@Controller('cat')
export class AdminController {
  constructor(@Inject(AdminService) private readonly catService: AdminService) {}

  @Post()
  async createCat(@Body() cat: Admin): Promise<Result> {
    await this.catService.createCat(cat);
    return { code: 200, message: '创建成功' };
  }

  @Delete(':id')
  async deleteCat(@Param('id') id: number): Promise<Result> {
    await this.catService.deleteCat(id);
    return { code: 200, message: '删除成功' };
  }

  // @Put(':id')
  // async updateCat(@Param('id') id: number, @Body() cat: Admin): Promise<Result> {
  //   await this.catService.updateCat(id, cat);
  //   return { code: 200, message: '更新成功' };
  // }

  @Get()
  async findOneCat(@Param('id') id: number): Promise<Result> {
    const data = await this.catService.findOneCat(1);
    return { code: 200, message: '查询成功', data };
  }
}
