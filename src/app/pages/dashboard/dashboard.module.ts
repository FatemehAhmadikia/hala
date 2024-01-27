import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from 'src/app/layout/sidebar/sidebar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    declarations: [DashboardComponent, SidebarComponent],
    imports: [DashboardRoutingModule],
})
export class DashboardModule {}
