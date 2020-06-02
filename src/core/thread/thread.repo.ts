import { ThreadModel } from './thread.model.mongoose';
import type { Thread } from './thread';
import { ThreadContent } from './thread-content';
import { PostContent } from './post/post-content';

export class ThreadRepo {
  async create<TContent extends ThreadContent>(thread: Thread<TContent>): Promise<Thread<TContent>> {
    const threadDocument = new ThreadModel(thread);

    return (await threadDocument.save()).toObject();
  }

  async getLastSaved(username: string): Promise<Thread<PostContent>> {
    return (await ThreadModel.findOne({ "creator.name": username }).sort({ "creator.updatedTime.created": -1 }).limit(1).exec())!.toObject();
  }
}
