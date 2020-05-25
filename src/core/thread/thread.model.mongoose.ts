import mongoose from 'mongoose';
import { creatorSchema } from '@schemas';


const reactionSchema = new mongoose.Schema({
  option: String,
}, { _id: false });

const threadResponseSchema = new mongoose.Schema({
  // thread: threadSchema, Add it below the threadSchema declaration
  reaction: reactionSchema,
}, { _id: false });

const threadContentSchema = new mongoose.Schema({
  message: String,
}, { _id: false });

const threadSchema = new mongoose.Schema({
  creator: creatorSchema,
  content: threadContentSchema,
  responses: [threadResponseSchema],
});

threadSchema.index({
  'creator.id': 1,
  'creator.updatedTime.modified': -1,
});

// Add Circular reference in response for another thread
threadResponseSchema.add({ thread: threadSchema });

const ThreadModel = mongoose.model('Thread', threadSchema);

export {
  ThreadModel,
};
