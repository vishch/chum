import { Strategy } from 'passport-local';
import { UserService } from 'core';
import { Crypto } from 'utils';

export class LocalStrategy {
  readonly #userService: UserService;

  constructor() {
    this.#userService = new UserService();
  }

  getStrategy(): Strategy {
    return new Strategy({
      usernameField: 'username',
      passwordField: 'password',
    }, async (username:string, password:string, done: any) => {
      try {
        const user = await this.#userService.findByUsername(username);
        const passwordsMatch = await Crypto.compare(password, user.passwordHash);

        if (passwordsMatch) {
          done(null, user);
        } else {
          done('Invalid username / password');
        }
      } catch (error) {
        done(error);
      }
    });
  }
}
