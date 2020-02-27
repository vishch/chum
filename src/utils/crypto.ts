import bcrypt from 'bcrypt';

export class Crypto {
  static compare(data: string, encrypted: string): Promise<boolean> {
    return bcrypt.compare(data, encrypted);
  }

  static hash(data: string, hashCost: number = 1): Promise<string> {
    return bcrypt.hash(data, hashCost);
  }
}
