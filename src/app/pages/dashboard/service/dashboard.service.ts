import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class DashboardService {
    cardsList = [
        {
            amount: '26,003.00',
            currencyUnit: 'SAR',
            actions: [{ title: 'Transfer', logo: 'transfer' }],
            cardNumber: 'SA83 9000 .... 00474640',
            bankLogoURL: 'brand',
        },
        {
            amount: '26,003.00',
            currencyUnit: 'SAR',
            actions: [{ title: 'Transfer', logo: 'transfer' }],
            cardNumber: 'SA83 9000 .... 00474640',
            bankLogoURL: 'brand',
        },
    ];
    constructor() {}

    getCards(): Observable<Card.Info[]> {
        return of(this.cardsList);
    }
}
