import { ThreadContent } from './thread-content';
import { ThreadResponse } from './response/thread-response';
import { BaseEntity } from './base-entity';
import { Creator } from './creator';

export interface Thread<TContent extends ThreadContent> extends BaseEntity<string> {
  id: string;
  creator: Creator;
  content: TContent;
  responses?: ThreadResponse<TContent>[];
}
