import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {
  private category: string;
  private name: string;
  private amount: number;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {}

  public addEntry() {
    this.databaseService.add(this.category, this.name, this.amount.toFixed(2));
  }
}
