import { ThreadRepo } from './thread.repo';
import type { Thread } from './thread';
import type { ThreadContent } from './thread-content';
import { PostContent } from './post/post-content';

export class ThreadService {
  readonly #threadRepo: ThreadRepo;

  constructor() {
    this.#threadRepo = new ThreadRepo();
  }

  create<TContent extends ThreadContent>(thread: Thread<TContent>): Promise<Thread<TContent>> {
    return this.#threadRepo.create(thread);
  }

  getLastSaved(username: string): Promise<Thread<PostContent>> {
    return this.#threadRepo.getLastSaved(username);
  }
}
