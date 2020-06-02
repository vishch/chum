import { BaseEntity, Creator } from "@models";
import { ThreadContent } from "./thread-content";
import { ThreadResponse } from "./response/thread-response";

export interface Thread<TContent extends ThreadContent> extends BaseEntity<string> {
  id?: string;
  creator: Creator;
  content: TContent;
  responses?: ThreadResponse[];
}
