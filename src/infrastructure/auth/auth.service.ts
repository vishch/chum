import { AppConfig } from 'utils/config';
import { Crypto } from 'utils';
import { AuthUserService } from './auth-user.service';

export class AuthService {
  readonly #authUserService: AuthUserService;

  constructor() {
    this.#authUserService = new AuthUserService();
  }

  async signup(username: string, password: string) {
    const passwordHash = await Crypto.hash(password, AppConfig.HASH_COST);

    await this.#authUserService.saveUser(username, passwordHash);
  }
}
