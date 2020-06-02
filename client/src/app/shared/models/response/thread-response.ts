import { Thread } from "../thread";
import { Reaction } from "./reaction";
import { ThreadContent } from '../thread-content';

export interface ThreadResponse<TContent extends ThreadContent> {
  thread: Thread<TContent>;
  reaction: Reaction;
}
