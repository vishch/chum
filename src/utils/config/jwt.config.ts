export class JwtConfig {
  static get SECRET(): string {
    return process.env.TOKEN_SECRET as string;
  }

  static get EXPIRATION_S(): number {
    return Number(process.env.TOKEN_EXPIRATION_S);
  }
}
