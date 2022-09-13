import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ErrorsInterceptor } from './common/errors.interceptor';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { NoticeModule } from './notice/notice.module';
import { Notice } from './notice/notice.entity';
import { Feedback } from './feedback/feedback.entity';
import { FeedbackModule } from './feedback/feedback.module';
import { Report } from './report/report.entity';
import { ReportModule } from './report/report.module';
import { Apply } from './apply/apply.entity';
import { ApplyModule } from './apply/apply.module';
import { Active } from './active/active.entity';
import { ActiveModule } from './active/active.module';
import { Lost } from './lost/lost.entity';
import { LostModule } from './lost/lost.module';
import { Volunteer } from './volunteer/volunteer.entity';
import { VolunteerModule } from './volunteer/volunteer.module';
import { Shower } from './shower/shower.entity';
import { ShowerModule } from './shower/shower.module';
import { Nuclein } from './nuclein/nuclein.entity';
import { NucleinModule } from './nuclein/nuclein.module';
import { Admin } from './admin/admin.entity';
import { AdminModule } from './admin/admin.module';

/**
 * @Module() 定义一个模块，并管理这个模块的导入集合、控制器集合、提供者集合、导出集合
 */
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'gaoyang000123',
      database: 'test',
      entities: [ User,Notice,Feedback,Report,Apply,Active,Lost,Volunteer,Shower,Nuclein,Admin],
      synchronize: true,
      logging: false,
    }),
    UserModule,
    NoticeModule,
    FeedbackModule,
    ReportModule,
    ApplyModule,
    ActiveModule,
    LostModule,
    VolunteerModule,
    ShowerModule,
    NucleinModule,
    AdminModule
  ], // 导入其他模块的集合
  controllers: [AppController], // 当前模块的控制器集合
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor,
    },
    AppService,
  ], // 当前模块的提供者集合
  exports: [], // 导出当前模块的提供者，用于被其他模块调用
})
export class AppModule {}
