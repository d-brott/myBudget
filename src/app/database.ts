import Dexie from 'dexie';
import { Entry } from './entry';

export class Database extends Dexie {
    budget: Dexie.Table<IEntry, number>

    constructor() {
        super("Database");

        this.version(1).stores({
            budget: "++id, category, name, amount"
        });

        this.budget.mapToClass(Entry);
        this.budget = this.table("budget");
    }
}

export interface IEntry {
    id?: number;
    category: string;
    name: string;
    amount: string;
}