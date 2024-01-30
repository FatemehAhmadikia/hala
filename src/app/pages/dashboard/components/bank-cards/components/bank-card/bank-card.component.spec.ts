import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCardComponent } from './bank-card.component';

describe('SpendingCardComponent', () => {
  let component: BankCardComponent;
  let fixture: ComponentFixture<BankCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BankCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
