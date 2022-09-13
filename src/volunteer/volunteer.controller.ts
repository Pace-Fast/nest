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
import { Volunteer } from './volunteer.entity';
import { VolunteerService } from './volunteer.service';

@Controller('volunteer')
export class VolunteerController {
  constructor(@Inject(VolunteerService) private readonly volunteerService: VolunteerService) {}

  @Post()
  async createCat(@Body("volunteer") volunteer: Volunteer): Promise<Result> {
    await this.volunteerService.createCat(volunteer);
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
  async findOneVolunteer(@Param('id') id: number): Promise<Result> {
    const data = await this.volunteerService.findOneVolunteer(1);
    return { code: 200, message: '查询成功', data };
  }
  @Get('/select')
  async findAll(): Promise<Result> {
    const data = await this.volunteerService.findAll();
    return { code: 200, message: '查询成功', data };
  }
}
