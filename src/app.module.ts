import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WatchModule } from './watch/watch-module';

@Module({
  imports: [WatchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
