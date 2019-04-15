import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBudgetComponent } from './show-budget.component';

describe('ShowBudgetComponent', () => {
  let component: ShowBudgetComponent;
  let fixture: ComponentFixture<ShowBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
