import {
  Router, Request, Response,
} from 'express';
import { Logger } from 'infrastructure';
import type { JwtPayload } from 'infrastructure/auth/strategies/jwt-payload';

export class UserRouter {
  readonly #logger: Logger;
  #router: Router;
  constructor() {
    this.#logger = new Logger('User Router');
  }

  get router(): Router {
    return this.#router;
  }

  init(): void {
    this.#router = Router();
    this.addProfile();
  }

  private addProfile() {
    this.#router.get('/profile',
      async (req: Request, res: Response) => {
        this.#logger.info('Accessed Profile');

        res.status(200).json(`Profile Authenticated for - ${(req.user as JwtPayload).userName}`);
      });
  }
}
