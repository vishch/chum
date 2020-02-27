import { AuthUserModel } from './auth-user.model.mongoose';
import { AuthUser } from './auth-user.model';

export class AuthUserRepo {
  async saveUser(username: string, passwordHash: string): Promise<AuthUser> {
    const userDocument = new AuthUserModel({ username, passwordHash });

    return (await userDocument.save()).toObject();
  }
}
