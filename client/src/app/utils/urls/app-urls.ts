export class AppUrls {
  static get Base(): string {
    return "";
  }

  static get Auth(): string {
    return `${AppUrls.Base}/auth`;
  }

  static get Home(): string {
    return `${AppUrls.Base}/home`;
  }
}
