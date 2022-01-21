import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { LoginMiddleware } from 'src/common/middleware/LoginMiddleware';
import { LoginModule } from 'src/login/login.module';
import WatchController from './watch-controller';
import WatchService from './watch-service';

@Module({
  imports: [LoginModule],
  exports: [WatchModule],
  controllers: [WatchController],
  providers: [WatchService],
})
export class WatchModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoginMiddleware)
      .forRoutes({ path: '/watches', method: RequestMethod.ALL });
  }
}
