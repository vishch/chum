import {
  Router, Request, Response,
} from 'express';
import { Logger } from 'infrastructure';
import { AuthService } from './auth.service';

export class AuthRouter {
  readonly #logger: Logger;
  readonly #authService: AuthService;
  #router: Router;

  constructor() {
    this.#logger = new Logger('Startup');
    this.#authService = new AuthService();
  }

  get router(): Router {
    return this.#router;
  }

  init(): void {
    this.#router = Router();
    this.addSignup();
  }

  private addSignup() {
    this.#router.post('/signup', async (req: Request, res: Response) => {
      try {
        const { username, password } = req.body;

        await this.#authService.signup(username, password);

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
}

export {
  AuthRouter as AuthRoutes,
};
