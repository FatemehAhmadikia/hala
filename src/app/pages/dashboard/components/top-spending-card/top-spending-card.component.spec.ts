import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSpendingCardComponent } from './top-spending-card.component';

describe('TopSpendingCardComponent', () => {
  let component: TopSpendingCardComponent;
  let fixture: ComponentFixture<TopSpendingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSpendingCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopSpendingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
