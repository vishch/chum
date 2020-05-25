import {
  Router, Request, Response,
} from 'express';
import { Logger } from 'infrastructure';
import type { JwtPayload } from 'infrastructure/auth/strategies/jwt-payload';
import { Time } from '@utils';
import { ApiResponse } from '@infrastructure/models';
import { ThreadService } from './thread.service';
import { Thread } from './thread';
import { PostContent } from './post/post-content';

export class ThreadRouter {
  readonly #logger: Logger;
  readonly #threadService: ThreadService;
  #router: Router;

  constructor() {
    this.#logger = new Logger('Thread Router');
    this.#threadService = new ThreadService();
  }

  get router(): Router {
    return this.#router;
  }

  init(): void {
    this.#router = Router();
    this.addPost();
  }

  private addPost(): void {
    this.#router.post('/post',
      async (req: Request, res: Response) => {
        const apiRes: ApiResponse = {};
        const { message } = req.body;
        const { userId, userName } = (req.user as JwtPayload);

        try {
          this.#logger.info(`Got New Post - ${message} - By ${userName}`);

          const thread: Thread<PostContent> = this.mapToThread(message, userId, userName);

          await this.#threadService.create(thread);

          this.#logger.info(`Post Created - ${message} - By ${userName}`);

          res.status(204).json(apiRes);
        } catch (error) {
          this.#logger.error(`Post Creation Failed - ${message} - By ${userName}`);
          this.#logger.error(error);

          apiRes.error = {
            code: 1000,
            message: "Post Creation Failed",
          };

          res.status(500).json(apiRes);
        }
      });
  }

  private mapToThread(message: any, userId: string, userName: string): Thread<PostContent> {
    const time = Time.Now();

    const thread: Thread<PostContent> = {
      content: {
        message,
      },
      creator: {
        id: userId,
        name: userName,
        updatedTime: {
          created: time,
          modified: time,
        },
      },
    };

    return thread;
  }
}
