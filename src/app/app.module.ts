import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { FormsModule} from '@angular/forms';
import { ShowBudgetComponent } from './show-budget/show-budget.component';

@NgModule({
  declarations: [
    AppComponent,
    NewEntryComponent,
    ShowBudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
