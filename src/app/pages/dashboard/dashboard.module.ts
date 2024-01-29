import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardPanelComponent } from './components/card-panel/card-panel.component';
import { DashboardService } from './service/dashboard.service';

@NgModule({
    declarations: [DashboardComponent, CardPanelComponent],
    imports: [DashboardRoutingModule],
    providers: [DashboardService],
})
export class DashboardModule {}
