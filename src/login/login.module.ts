import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import LoginService from './login.service';

@Module({
  exports: [LoginService],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
