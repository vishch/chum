import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
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

userSchema.set('toObject', {
  getters: true,
});

const UserModel = mongoose.model('User', userSchema);

export {
  UserModel,
};
