import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApplyController } from './apply.controller';
import { Apply } from './apply.entity';
import { ApplyService } from './apply.service';

@Module({
  imports: [TypeOrmModule.forFeature([Apply])],
  controllers: [ApplyController],
  providers: [ApplyService],
})
export class ApplyModule {}
