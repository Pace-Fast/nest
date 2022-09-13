import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { NucleinController } from './nuclein.controller';
import { Nuclein } from './nuclein.entity';
import { NucleinService } from './nuclein.service';

@Module({
  imports: [TypeOrmModule.forFeature([Nuclein])],
  controllers: [NucleinController],
  providers: [NucleinService],
})
export class NucleinModule {}
