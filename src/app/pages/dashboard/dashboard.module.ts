import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardPanelComponent } from './components/card-panel/card-panel.component';
import { DashboardService } from './service/dashboard.service';
import { CommonModule } from '@angular/common';
import { TopCategoriesComponent } from './components/top-categories/top-categories.component';
import { TopSpendingCardComponent } from './components/top-spending-card/top-spending-card.component';
import { SpendingCardComponent } from './components/top-spending-card/components/spending-card/spending-card.component';

@NgModule({
    declarations: [
        DashboardComponent,
        CardPanelComponent,
        TopCategoriesComponent,
        TopSpendingCardComponent,
        SpendingCardComponent,
    ],
    imports: [DashboardRoutingModule, CommonModule],
    providers: [DashboardService],
})
export class DashboardModule {}
