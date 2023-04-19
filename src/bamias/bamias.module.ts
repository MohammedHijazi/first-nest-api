import { Module } from '@nestjs/common';
import { BamiasController } from './bamias.controller';
import { BamiasService } from './bamias.service';

@Module({
  controllers: [BamiasController],
  providers: [BamiasService]
})
export class BamiasModule {}
