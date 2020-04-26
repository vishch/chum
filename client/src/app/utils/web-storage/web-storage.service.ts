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
      this.items[key] = JSON.parse(localStorage.getItem(key));
    }

    return this.items[key];
  }

  setItem<T>(key: string, item: T): void {
    this.items[key] = item;
    const storageItem = JSON.stringify(item);
    localStorage.setItem(key, storageItem);
  }
}
