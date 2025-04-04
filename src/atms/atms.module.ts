import { Module } from '@nestjs/common';
import { AtmsService } from './atms.service';
import { AtmsController } from './atms.controller';

@Module({
  controllers: [AtmsController],
  providers: [AtmsService],
})
export class AtmsModule {}
