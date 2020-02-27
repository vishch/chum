import mongoose from 'mongoose';
import { MongoConfig } from 'utils/config';
import { Logger } from '../logger';

export class OdmMongoose {
  readonly #server: string;
  readonly #dbName: string;
  readonly #logger: Logger;

  constructor() {
    this.#logger = new Logger('OdmMongoose');

    this.#server = MongoConfig.SERVER;
    this.#dbName = MongoConfig.DB;
  }

  public async init(): Promise<void> {
    const connection = `${this.#server}/${this.#dbName}`;
    const options = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true };

    try {
      await mongoose.connect(connection, options);
    } catch (error) {
      this.#logger.error(`Mongoose connection failed - ${error}`);
    }
  }
}
