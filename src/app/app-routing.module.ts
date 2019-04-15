import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { ShowBudgetComponent } from './show-budget/show-budget.component';

const routes: Route[] = [
  {path: '', redirectTo: '/add-entry', pathMatch: 'full'},
  {path: 'add-entry', component: NewEntryComponent},
  {path: 'show-budget', component: ShowBudgetComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
