import { ThreadRepo } from './thread.repo';
import type { Thread } from './thread';
import type { ThreadContent } from './thread-content';

export class ThreadService {
  readonly #threadRepo: ThreadRepo;

  constructor() {
    this.#threadRepo = new ThreadRepo();
  }

  create<TContent extends ThreadContent>(thread: Thread<TContent>): Promise<void> {
    return this.#threadRepo.create(thread);
  }
}
