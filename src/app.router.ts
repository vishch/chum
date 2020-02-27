import { Express, Router } from 'express';
import { AuthRouter } from 'infrastructure/auth';

export class AppRouter {
  #router: Router;
  readonly #authRouter: AuthRouter;

  constructor(private readonly app: Express) {
    this.#authRouter = new AuthRouter();
  }

  init(): void {
    this.#router = Router();

    this.addAuth();

    this.app.use('/api', this.#router);
  }

  private addAuth(): void {
    this.#authRouter.init();
    this.#router.use('/auth', this.#authRouter.router);
  }
}
