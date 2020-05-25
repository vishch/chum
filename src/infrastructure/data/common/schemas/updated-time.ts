import mongoose from 'mongoose';

export const updatedTimeSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now,
  },
  modified: {
    type: Date,
    default: Date.now,
  },
}, { _id: false });
