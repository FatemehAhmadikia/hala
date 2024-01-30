import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardPanelComponent } from './components/card-panel/card-panel.component';
import { DashboardService } from './service/dashboard.service';
import { CommonModule } from '@angular/common';
import { TopCategoriesComponent } from './components/top-categories/top-categories.component';
import { BankCardsComponent } from './components/bank-cards/bank-cards.component';
import { BankCardComponent } from './components/bank-cards/components/bank-card/bank-card.component';
import { CardComponent } from './components/card-panel/components/card/card.component';

@NgModule({
    declarations: [
        DashboardComponent,
        CardPanelComponent,
        TopCategoriesComponent,
        BankCardsComponent,
        BankCardComponent,
        CardComponent,
    ],
    imports: [DashboardRoutingModule, CommonModule],
    providers: [DashboardService],
})
export class DashboardModule {}
