import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routeAddEntry = {linkeName: 'AddEntry', url: 'add-entry'};
  routeShowBudget = {linkName: 'ShowBudget', url: 'show-budget'}  
}

