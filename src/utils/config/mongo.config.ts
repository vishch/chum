export class MongoConfig {
  static get SERVER(): string {
    return process.env.MONGO_SERVER as string;
  }

  static get DB(): string {
    return process.env.MONGO_DB as string;
  }
}
