import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationToken } from 'src/model/authentication-token';
import { User } from 'src/model/user';
import LoginService from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  login(@Body() user: User): AuthenticationToken {
    return this.loginService.authenticate(user);
  }
}
