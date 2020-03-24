import { Strategy } from 'passport-local';
import { Crypto } from 'utils';
import { Logger } from 'infrastructure';
import { AuthUserService } from '../auth-user.service';

export class LocalStrategy {
  readonly #authUserService: AuthUserService;
  readonly #logger: Logger;

  constructor() {
    this.#authUserService = new AuthUserService();
    this.#logger = new Logger('Local Strategy');
  }

  getStrategy(): Strategy {
    return new Strategy({
      usernameField: 'email',
      passwordField: 'password',
    }, async (username:string, password:string, done: any) => {
      try {
        this.#logger.info(`Checking if user exists - ${username}`);

        const user = await this.#authUserService.findByUsername(username);

        if (user) {
          const passwordsMatch = await Crypto.compare(password, user.passwordHash);

          if (passwordsMatch) {
            this.#logger.info(`Valid local credentials - ${username}`);
            return done(null, user);
          }
        }

        const invalidCredentialsMsg = `Invalid username / password - ${username}`;
        this.#logger.info(invalidCredentialsMsg);

        return done(null, false, invalidCredentialsMsg);
      } catch (error) {
        this.#logger.error(`Error in validating user - ${username}${error}`);
        return done(error);
      }
    });
  }
}
