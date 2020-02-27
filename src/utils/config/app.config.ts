export class AppConfig {
  static get PORT(): number {
    return Number(process.env.PORT);
  }

  static get HASH_COST(): number {
    return Number(process.env.HASH_COST);
  }
}
