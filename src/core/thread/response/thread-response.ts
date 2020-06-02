import { Thread } from "../thread";
import { Reaction } from "./reaction";

export interface ThreadResponse {
  thread: Thread;
  reaction: Reaction;
}
