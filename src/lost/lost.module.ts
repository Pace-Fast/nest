import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LostController } from './lost.controller';
import { Lost } from './lost.entity';
import { LostService } from './lost.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lost])],
  controllers: [LostController],
  providers: [LostService],
})
export class LostModule {}
