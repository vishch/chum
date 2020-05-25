export class ApiUrls {
  private static get Base(): string {
    return "api/v1";
  }

  static get Auth(): string {
    return `${ApiUrls.Base}/auth`;
  }

  private static get Thread(): string {
    return `${ApiUrls.Base}/thread`;
  }

  static get Post(): string {
    return `${ApiUrls.Thread}/post`;
  }
}
