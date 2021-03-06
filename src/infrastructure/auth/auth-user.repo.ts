import { AuthUserModel } from './auth-user.model.mongoose';
import { AuthUser } from './auth-user';

export class AuthUserRepo {
  async register(username: string, passwordHash: string): Promise<AuthUser> {
    const userDocument = new AuthUserModel({ username, passwordHash });

    return (await userDocument.save()).toObject();
  }

  async findByUsername(username: string): Promise<AuthUser> {
    return (await AuthUserModel.findOne({ username }).exec())?.toObject();
  }
}
