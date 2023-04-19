import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BamiasModule } from './bamias/bamias.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [BamiasModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
