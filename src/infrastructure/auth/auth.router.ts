import {
  Router, Request, Response,
} from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { Logger } from 'infrastructure';
import { JwtConfig } from 'utils/config';
import { Time } from 'utils';
import { AuthService } from './auth.service';
import type { AuthUser } from './auth-user.model';
import type { JwtPayload } from './strategies/jwt-payload';

export class AuthRouter {
  readonly #logger: Logger;
  readonly #authService: AuthService;
  #router: Router;

  constructor() {
    this.#logger = new Logger('Auth Router');
    this.#authService = new AuthService();
  }

  get router(): Router {
    return this.#router;
  }

  init(): void {
    this.#router = Router();
    this.addSignup();
    this.addSignin();
  }

  private addSignup(): void {
    this.#router.post('/signup', async (req: Request, res: Response) => {
      try {
        const { username, password } = req.body;

        const success = await this.#authService.signup(username, password);

        if (!success) {
          const msg = 'User already exists';

          this.#logger.error(msg);

          return res.status(200).send({ error: msg });
        }

        this.#logger.info('User created successfully');

        res.status(200).send({ username });
      } catch (error) {
        const msg = '1 req body should take the form { username, password }';

        this.#logger.error(msg);
        this.#logger.error(error);

        res.status(500).send({
          error: msg,
        });
      }
    });
  }

  private addSignin(): void {
    this.#router.post('/signin', async (req: Request, res: Response) => {
      try {
        const auth = passport.authenticate(
          'local',
          { session: false },
          (error: string, user: AuthUser) => {
            if (error || !user) {
              const msg = `User not found - ${error}`;
              this.#logger.error(msg);
              return res.status(500).json(msg);
            }

            this.#logger.info(`Jwt Expire time - ${JwtConfig.EXPIRATION_S}`);

            const payload: JwtPayload = {
              username: user.username,
              expires: Time.NowInSec() + JwtConfig.EXPIRATION_S,
            };

            this.#logger.info(`Logging in the user - ${user.username}`);

            req.login(payload, { session: false }, (loginError: string) => {
              if (loginError) {
                const msg = `Login failed for user: ${user.username} - ${loginError}`;

                this.#logger.error(msg);

                return res.status(500).json(msg);
              }

              this.#logger.info(`Jwt Secret - ${JwtConfig.SECRET}`);

              const token = jwt.sign(JSON.stringify(payload), JwtConfig.SECRET);

              this.#logger.info(`Setting up the token in cookie - ${token}`);

              res.cookie('jwt', token, { httpOnly: true });
              res.status(200).json(user.username);
            });
          },
        );

        this.#logger.info('Attempt login');
        auth(req, res);
      } catch (authError) {
        res.send(500).json(`Auth Error - ${authError}`);
      }
    });
  }
}

export {
  AuthRouter as AuthRoutes,
};
