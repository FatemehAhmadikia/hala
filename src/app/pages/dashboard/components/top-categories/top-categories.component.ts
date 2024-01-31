import { Component } from '@angular/core';
import { Months } from '../../enums/dashboard.enum';

@Component({
    selector: 'top-categories',
    templateUrl: './top-categories.component.html',
    styleUrl: './top-categories.component.scss',
})
export class TopCategoriesComponent {
    months: string[] = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    selectedMonth: Months = Months.May;

    get Months() {
        return Months;
    }
}
