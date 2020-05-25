export class Time {
  static NowInSec(): number {
    return Math.floor(Time.Now() / 1000);
  }

  static Now(): number {
    return Date.now();
  }
}
