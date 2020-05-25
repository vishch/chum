import { Injectable } from '@angular/core';
import { StorageKeys } from './storage-keys';

@Injectable({
  providedIn: 'root',
})
export class WebStorageService {

  private items: any = {};

  constructor() { }

  getItem<T>(key: string): T {
    if (this.items[key] == null) {
      const item = localStorage.getItem(key);
      this.items[key] = item ? JSON.parse(item) : null;
    }

    return this.items[key];
  }

  setItem<T>(key: string, item: T): void {
    this.items[key] = item;
    const storageItem = JSON.stringify(item);
    localStorage.setItem(key, storageItem);
  }
}
