import mongoose from 'mongoose';
import { Logger } from '../logger';

export class OdmMongoose {
  private readonly server: string;
  private readonly dbName: string;
  private readonly logger: Logger;

  constructor() {
    this.logger = new Logger('OdmMongoose');

    this.server = process.env.MONGO_SERVER;
    this.dbName = process.env.MONGO_DB;
  }

  public async init() {
    const connection = `${this.server}/${this.dbName}`;
    const options = { useNewUrlParser: true, useUnifiedTopology: true };

    try {
      await mongoose.connect(connection, options);
    } catch (error) {
      this.logger.error(`Mongoose connection failed - ${error}`);
    }
  }
}
