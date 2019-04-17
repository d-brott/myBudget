import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { IEntry } from '../database';

@Component({
  selector: 'app-show-budget',
  templateUrl: './show-budget.component.html',
  styleUrls: ['./show-budget.component.css']
})
export class ShowBudgetComponent implements OnInit {
  private incomeEntries: Map<number, IEntry> = new Map<number, IEntry>();
  private expenseEntries: Map<number, IEntry> = new Map<number, IEntry>();
  private investmentEntries: Map<number, IEntry> = new Map<number, IEntry>();

  private sumIncome: number = 0.00;
  private sumExpense: number = 0.00;
  private sumInvestment: number = 0.00;

  private sumIncomeStr: string;
  private sumExpenseStr: string;
  private sumInvestmentStr: string;
  private diffInvestmentStr: string;
  private diffExpenseStr: string;

  private diffInvestment: number = 0.00;
  private diffExpense: number = 0.00;

  constructor(private databaseService: DatabaseService) {
    this.getBudget();
  }

  ngOnInit() {
  }

  public getBudget() {
    this.databaseService.get(map => {
      map.forEach((value: IEntry, key: number) => {
        if (value.category == "Income") {
          this.incomeEntries.set(value.id, value);
          this.sumIncome += Number(value.amount);

        } else if (value.category == "Expense") { 
          this.expenseEntries.set(value.id, value);
          this.sumExpense += Number(value.amount);
        
        } else if (value.category == "Investment") {
          this.investmentEntries.set(value.id, value);
          this.sumInvestment += Number(value.amount);

        }
      })

      this.diffInvestment = this.sumIncome - this.sumInvestment;
      this.diffExpense = this.sumIncome - this.sumInvestment - this.sumExpense;

      this.sumIncomeStr = this.sumIncome.toFixed(2);
      this.sumExpenseStr = this.sumExpense.toFixed(2);
      this.sumInvestmentStr = this.sumInvestment.toFixed(2);
      this.diffInvestmentStr = this.diffInvestment.toFixed(2);
      this.diffExpenseStr = this.diffExpense.toFixed(2);
    });
  }

  public deleteAll() {
    this.databaseService.clear();
    location.reload();
  }
}
