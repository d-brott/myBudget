import {IEntry} from './database';

export class Entry implements IEntry{
    id: number;
    category: string;
    name: string;
    amount: string;

    constructor(category: string, name: string, amount: string, id?:number) {
        this.category = category;
        this.name = name;
        this.amount = amount;
        if (id) this.id = id;
    }
}