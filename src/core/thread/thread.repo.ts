import { ThreadModel } from './thread.model.mongoose';
import type { Thread } from './thread';
import { ThreadContent } from './thread-content';

export class ThreadRepo {
  async create<TContent extends ThreadContent>(thread: Thread<TContent>): Promise<void> {
    const threadDocument = new ThreadModel(thread);

    await threadDocument.save();
  }
}
