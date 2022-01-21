import { Injectable } from '@nestjs/common';
import { AuthenticationToken } from 'src/model/authentication-token';
import { DecodedToken } from 'src/model/decoded-token';
import { User } from 'src/model/user';

@Injectable()
export default class LoginService {
  expirationPeriod: number = 1000 * 60 * 60; // 1h in ms

  users = [
    { email: 'email@email.com', password: '12345' },
    { email: 'email1@email.com', password: '12345' },
    { email: 'email2@email.com', password: '12345' },
  ] as User[];

  authenticate(user: User): AuthenticationToken {
    if (this.shouldAuthenticate(user)) {
      return this.buildAuthenticationToken(user);
    }
    return null;
  }

  isTokenValid(token: string): boolean {
    return Date.now() < this.getDecodedToken(token).expiration;
  }

  getDecodedToken(token: string): DecodedToken {
    return JSON.parse(Buffer.from(token, 'base64').toString()) as DecodedToken;
  }

  private findUserByEmail(email: string): User {
    return this.users.filter((user) => user.email === email)[0];
  }

  private shouldAuthenticate(user: User): boolean {
    return this.findUserByEmail(user.email).password === user.password;
  }

  private buildAuthenticationToken(user: User): AuthenticationToken {
    const expiration = Date.now() + this.expirationPeriod;
    const userToken = {
      expiration: expiration,
      username: user.email,
    };

    return {
      token: Buffer.from(JSON.stringify(userToken)).toString('base64'),
    };
  }
}
