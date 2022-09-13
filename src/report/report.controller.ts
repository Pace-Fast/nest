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
import { Report } from './report.entity';
import { ReportService } from './report.service';

@Controller('report')
export class ReportController {
  constructor(@Inject(ReportService) private readonly reportService: ReportService) {}

  @Post('/doReport')
  async createReport(@Body('report') report: Report): Promise<Result> {
    await this.reportService.createReport(report);
    return { code: 200, message: '提交成功' };
  }

  // @Delete(':id')
  // async deleteCat(@Param('id') id: number): Promise<Result> {
  //   await this.reportService.deleteCat(id);
  //   return { code: 200, message: '删除成功' };
  // }

  // @Put(':id')
  // async updateCat(@Param('id') id: number, @Body() cat: Cat): Promise<Result> {
  //   await this.reportService.updateCat(id, cat);
  //   return { code: 200, message: '更新成功' };
  // }

  @Get()
  async findOneReport(@Param('id') id: number): Promise<Result> {
    const data = await this.reportService.findOneReport(1);
    return { code: 200, message: '查询成功', data };
  }
  // @Post()
  // async createReport(@Body('id') id: number, @Body('name') name: string, @Body('address') address: string, @Body('time') time: string,@Body('normal') normal: string,@Body('yes_noon_temp') yes_noon_temp: string,@Body('yes_night_temp') yes_night_temp: string,@Body('today_morning_temp') today_morning_temp: string,@Body('isolation') _isolation: string): Promise<Result> {
  //   this.reportService.createReport({  id: id, title: title, content: content, time: time });
  //   return { code: 200, message: '反馈成功' }
  // }
  @Get('/select')
  async findAll(): Promise<Result> {
    const data = await this.reportService.findAll();
    return { code: 200, message: '查询成功', data };
  }
}
