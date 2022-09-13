import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ShowerController } from './shower.controller';
import { Shower } from './shower.entity';
import { ShowerService } from './shower.service';

@Module({
  imports: [TypeOrmModule.forFeature([Shower])],
  controllers: [ShowerController],
  providers: [ShowerService],
})
export class ShowerModule {}
