import { UserModel } from './user.model.mongoose';
import type { User } from './user';

export class UserRepo {
  async findByUsername(username: string): Promise<User> {
    return (await UserModel.findOne({ username }).exec())!.toObject();
  }
}
