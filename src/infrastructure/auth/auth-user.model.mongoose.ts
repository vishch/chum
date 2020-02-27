import mongoose from 'mongoose';

const authUserSchema = new mongoose.Schema({
  username: {
    type: String,
    index: true,
    unique: true,
    dropDups: true,
    required: true,
  },
  passwordHash: { // salted and hashed using bcrypt
    type: String,
    required: true,
  },
});

authUserSchema.set('toObject', {
  getters: true,
});

const AuthUserModel = mongoose.model('AuthUser', authUserSchema);

export {
  AuthUserModel,
};
