import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { Result } from '../common/result.interface';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(@Inject(UserService) private readonly UserService: UserService) {}

  @Post('')
  async createUser(@Body() user: User): Promise<Result> {
    // jjnhjnhjhnjhnh
    // mkhkh
    await this.UserService.createUser(user);
    return { code: 200, message: '创建成功' };
  }

  // @Delete(':id')
  // async deleteCat(@Param('id') id: number): Promise<Result> {
  //   await this.catService.deleteCat(id);
  //   return { code: 200, message: '删除成功' };
  // }

  // @Put(':id')
  // async updateCat(
  //   @Param('id') id: number,
  //   @Body() user: User,
  // ): Promise<Result> {
  //   await this.catService.updateCat(id, user);
  //   return { code: 200, message: '更新成功' };
  // }

  @Get('/sel')
  async findOneUser(@Param('id') id: number): Promise<Result> {
    const data = await this.UserService.findOneUser(id);
    return { code: 200, message: '查询成功', data };
  }

  @Post('/login')
  async loginSelect(
    @Body('username') username: string,
    @Body('password') password: string,
  ): Promise<Result> {
    const data = await this.UserService.loginSelect(username);
    if (data.password == password) {
      return { code: 200, message: '查询成功', data };
    }
    return { code: 200, message: '查询失败' };
  }
  @Post('/person')
  async personSelect(@Body('username') username: string): Promise<Result> {
    const data = await this.UserService.personSelect(username);
    return { code: 200, message: '查询成功', data };
  }
  @Post('/updateImg')
  async updateImg(
    @Body('id') id: number,
    @Body('img') img: string,
  ): Promise<Result> {
    const data = await this.UserService.findOneUser(id);
    this.UserService.updateUser(id, {
      id: data.id,
      username: data.username,
      password: data.password,
      name: data.name,
      img: img,
      role_id: data.role_id,
      vaccination: data.vaccination,
    });
    return { code: 200, message: '修改成功' };
  }
  @Post('/updPwd')
  async pwdSelect(
    @Body('username') username: string,
    @Body('pwd1') pwd1: string,
    @Body('pwd2') pwd2: string,
  ): Promise<Result> {
    const data = await this.UserService.pwdSelect(username);
    if (data.password == pwd1) {
      this.UserService.updateUser(data.id, {
        id: data.id,
        username: data.username,
        password: pwd2,
        name: data.name,
        img: data.img,
        role_id: data.role_id,
        vaccination: data.vaccination,
      });
      return { code: 200, message: '修改成功', data };
    }
    return { code: 200, message: '原密码错误' };
  }
  @Post('/updateVac')
  async updateVac(
    @Body('id') id: number,
    @Body('vaccination') vaccination: string,
  ): Promise<Result> {
    const data = await this.UserService.findOneUser(id);
    this.UserService.updateUser(id, {
      id: data.id,
      username: data.username,
      password: data.password,
      name: data.name,
      img: data.img,
      role_id: data.role_id,
      vaccination: vaccination,
    });
    return { code: 200, message: '提交成功' };
  }
  @Get('/select')
  async findAll(): Promise<Result> {
    const data = await this.UserService.findAll();
    return { code: 200, message: '查询成功', data };
  }
}
