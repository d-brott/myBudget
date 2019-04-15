import { Injectable } from '@angular/core';
import { Database, IEntry } from './database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db = new Database();

  constructor() { }

  add(nCategory: string, nName: string, nAmount: string) {
    this.db.budget.add({
      category: nCategory,
      name: nName,
      amount: nAmount
    });
  }

  clear() {
    this.db.budget.clear();
  }

  get(callback) {
    let map: Map<number, IEntry> = new Map<number, IEntry>();

    this.db.budget.each(entry => {
      map.set(entry.id, entry);
    }).then(() => {
      callback(map);
    });
  }
}
