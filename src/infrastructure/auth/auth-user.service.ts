import { AuthUserRepo } from './auth-user.repo';
import type { AuthUser } from './auth-user.model';

export class AuthUserService {
  readonly #authUserRepo: AuthUserRepo;

  constructor() {
    this.#authUserRepo = new AuthUserRepo();
  }

  async register(username: string, passwordHash: string): Promise<AuthUser> {
    const user = await this.findByUsername(username);
    if (user) {
      return null;
    }

    return this.#authUserRepo.register(username, passwordHash);
  }

  findByUsername(username: string): Promise<AuthUser> {
    return this.#authUserRepo.findByUsername(username);
  }
}
