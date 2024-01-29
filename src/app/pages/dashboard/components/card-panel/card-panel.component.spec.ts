import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPanelComponent } from './card-panel.component';

describe('CardManagerComponent', () => {
    let component: CardPanelComponent;
    let fixture: ComponentFixture<CardPanelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CardPanelComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CardPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
