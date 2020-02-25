import dotenv from 'dotenv';
import express from 'express';
import { Logger, Store } from './infrastructure';

export default class Startup {
  private readonly logger: Logger;

  constructor() {
    this.logger = new Logger('Startup');
  }
  public async init(): Promise<void> {
    dotenv.config({ debug: true });
    this.logger.init();

    const app = express();
    const port = process.env.PORT || 3000;

    const store = new Store();
    await store.init();

    app.get('/', (req, res) => {
      res.send('Hello chum');
    });

    app.listen(port, () => {
      this.logger.info(`Listening on port: ${port}`);
    });
  }
}
