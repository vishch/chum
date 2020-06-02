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
    this.getLastSaved();
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

          const newPost = await this.#threadService.create(thread);

          this.#logger.info(`Post Created - ${message} - By ${userName}`);

          return res.status(201).json({ data: newPost });
        } catch (error) {
          this.#logger.error(`Post Creation Failed - ${message} - By ${userName}`);
          this.#logger.error(error);

          apiRes.error = {
            code: 1000,
            message: "Post Creation Failed",
          };

          return res.status(500).json(apiRes);
        }
      });
  }

  private getLastSaved(): void {
    this.#router.get('/post',
      async (req: Request, res: Response) => {
        const apiRes: ApiResponse = {};
        const { userName } = (req.user as JwtPayload);

        try {
          this.#logger.info(`Fetch last saved - By ${userName}`);

          const lastPost = await this.#threadService.getLastSaved(userName);

          this.#logger.info(`Last Post Fetched - ${lastPost && lastPost.content.message} - By ${userName}`);

          return res.status(200).json({ data: lastPost });
        } catch (error) {
          this.#logger.error(`Last Post Fetch Failed - By ${userName}`);
          this.#logger.error(error);

          apiRes.error = {
            code: 1001,
            message: "Last Post Fetch Failed",
          };

          return res.status(500).json(apiRes);
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
