import mongoose, { Schema } from 'mongoose';
import { updatedTimeSchema } from './updated-time';

export const creatorSchema = new mongoose.Schema({
  id: Schema.Types.ObjectId,
  name: String,
  updatedTime: updatedTimeSchema,
}, { _id: false });
