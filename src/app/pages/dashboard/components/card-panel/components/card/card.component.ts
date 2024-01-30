import { Component, Input } from '@angular/core';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
})
export class CardComponent {
    @Input() card!: Card.Info;
    @Input() displayAllCardCards: boolean = false;
}
