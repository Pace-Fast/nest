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
import { Shower } from './shower.entity';
import { ShowerService } from './shower.service';

@Controller('shower')
export class ShowerController {
  constructor(@Inject(ShowerService) private readonly showerService: ShowerService) {}

  @Post()
  async createShower(@Body() shower: Shower): Promise<Result> {
    await this.showerService.createShower(shower);
    return { code: 200, message: '创建成功' };
  }

  @Post('updata')
  async updataShower(@Body('id') id:number ): Promise<Result> {
    await this.showerService.updateShower(id,{id:id,free:'否',damage:'否'});
    return { code: 200, message: '更新成功' };
  }
  @Post('back')
  async backShower(@Body('id') id:number ): Promise<Result> {
    await this.showerService.updateShower(id,{id:id,free:'是',damage:'否'});
    return { code: 200, message: '更新成功' };
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
  async findAllShower(): Promise<Result> {
    const data = await this.showerService.findAll();
    return { code: 200, message: '查询成功', data };
  }
}
