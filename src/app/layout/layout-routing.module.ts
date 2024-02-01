import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from '@core/guards/auth-guard';

const routes: Routes = [
    // Main Layout
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('../pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
            },
            {
                path: 'cards-management',
                loadComponent: () =>
                    import('../pages/cards-management/cards-management.component').then((m) => m.CardsManagementComponent),
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
        ],
    },

    // Empty Layout
    {
        path: '',
        component: EmptyComponent,
        children: [
            //like login page
        ],
    },
    //{ path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}
