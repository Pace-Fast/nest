import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ActiveController } from './active.controller';
import { Active } from './active.entity';
import { ActiveService } from './active.service';

@Module({
  imports: [TypeOrmModule.forFeature([Active])],
  controllers: [ActiveController],
  providers: [ActiveService],
})
export class ActiveModule {}
