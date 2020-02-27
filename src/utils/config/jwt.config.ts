export class JwtConfig {
  static get SECRET(): string {
    return process.env.TOKEN_SECRET;
  }
}
