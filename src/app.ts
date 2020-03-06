import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { AppConfig } from 'utils/config';
import { AppRouter } from 'app.router';
import { Logger, Store } from 'infrastructure';
import { Auth } from 'infrastructure/auth';

export default class App {
  app: express.Express;

  readonly #logger: Logger;

  constructor() {
    this.#logger = new Logger('App');
  }

  public async init(): Promise<void> {
    dotenv.config();
    this.#logger.init();

    this.app = express();
    const port = AppConfig.PORT || 3000;

    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.app.use(cookieParser());

    await this.addStore();
    this.addAuth();
    this.addRoutes();

    this.app.listen(port, () => {
      this.#logger.info(`Listening on port: ${port}`);
    });
  }

  private addAuth(): void {
    const auth = new Auth(this.app);
    auth.init();
  }

  private async addStore(): Promise<void> {
    const store = new Store();
    await store.init();
  }

  private addRoutes(): void {
    new AppRouter(this.app).init();
  }
}
