export class ApiUrls {
  static get Base(): string {
    return "api/v1";
  }

  static get Auth(): string {
    return `${ApiUrls.Base}/auth`;
  }
}
