import { Express, Router } from 'express';
import { AuthRouter, AuthMiddleware } from 'infrastructure/auth';
import { UserRouter } from 'core/users';
import { ThreadRouter } from 'core/thread/thread.router';

export class AppRouter {
  #router: Router;
  readonly #authRouter: AuthRouter;
  readonly #userRouter: UserRouter;
  readonly #threadRouter: ThreadRouter;

  constructor(private readonly app: Express) {
    this.#authRouter = new AuthRouter();
    this.#userRouter = new UserRouter();
    this.#threadRouter = new ThreadRouter();
  }

  init(): void {
    this.#router = Router();

    this.addAuth();
    this.addUser();
    this.addPost();

    this.app.use('/api/v1', this.#router);
  }

  private addAuth(): void {
    this.#authRouter.init();
    this.#router.use('/auth', this.#authRouter.router);
  }

  private addUser(): void {
    this.#userRouter.init();
    this.#router.use('/user', new AuthMiddleware().init(), this.#userRouter.router);
  }

  private addPost(): void {
    this.#threadRouter.init();
    this.#router.use('/thread', new AuthMiddleware().init(), this.#threadRouter.router);
  }
}
