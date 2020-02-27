import { AuthUserRepo } from './auth-user.repo';
import type { AuthUser } from './auth-user.model';

export class AuthUserService {
  readonly #authUserRepo: AuthUserRepo;

  constructor() {
    this.#authUserRepo = new AuthUserRepo();
  }

  saveUser(username: string, passwordHash: string): Promise<AuthUser> {
    return this.#authUserRepo.saveUser(username, passwordHash);
  }
}
