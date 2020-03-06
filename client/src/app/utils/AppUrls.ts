export class AppUrls {
  static get Base(): string {
    return "api/v1";
  }

  static get Auth(): string {
    return `${AppUrls.Base}/auth`;
  }
}