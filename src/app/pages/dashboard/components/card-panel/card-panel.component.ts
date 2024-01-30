import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';

@Component({
    selector: 'card-panel',
    templateUrl: './card-panel.component.html',
    styleUrl: './card-panel.component.scss',
})
export class CardPanelComponent implements OnInit {
    cards: Card.Info[] = [];

    constructor(private dashboardService: DashboardService) {}

    ngOnInit(): void {
        this.getCards();
    }

    getCards() {
        this.dashboardService.getCards().subscribe((res) => (this.cards = res));
    }
}
