import { UserRepo } from './user.repo';
import type { User } from './user';

export class UserService {
  readonly #userRepo: UserRepo;

  constructor() {
    this.#userRepo = new UserRepo();
  }

  findByUsername(username: string): Promise<User> {
    return this.#userRepo.findByUsername(username);
  }
}
