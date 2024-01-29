import { Component, Input } from '@angular/core';

@Component({
    selector: 'card-panel',
    templateUrl: './card-panel.component.html',
    styleUrl: './card-panel.component.scss',
})
export class CardPanelComponent {
   cards: Card.Info[] = [];
    constructor() {}
}
