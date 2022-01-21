import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction } from 'express';
import LoginService from 'src/login/login.service';

@Injectable()
export class LoginMiddleware implements NestMiddleware {
  constructor(private readonly loginService: LoginService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];
    if (!token) {
      throw new HttpException('Token required', HttpStatus.UNAUTHORIZED);
    }
    if (this.loginService.isTokenValid(req.headers['authorization'])) {
      console.log(
        `user logged in was:  ${this.loginService.getDecodedToken(token)}`,
      );
      next();
    }
    throw new HttpException('Token invalid', HttpStatus.UNAUTHORIZED);
  }
}
