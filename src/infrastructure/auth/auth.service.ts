import { AppConfig } from 'utils/config';
import { Crypto } from 'utils';
import { AuthUserService } from './auth-user.service';

export class AuthService {
  readonly #authUserService: AuthUserService;

  constructor() {
    this.#authUserService = new AuthUserService();
  }

  async register(username: string, password: string): Promise<boolean> {
    const passwordHash = await Crypto.hash(password, AppConfig.HASH_COST);

    const user = await this.#authUserService.register(username, passwordHash);

    return !!user;
  }
}
