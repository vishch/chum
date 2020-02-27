export class MongoConfig {
  static get SERVER(): string {
    return process.env.MONGO_SERVER;
  }

  static get DB(): string {
    return process.env.MONGO_DB;
  }
}
