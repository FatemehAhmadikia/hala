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
        canActivate: [],
        children: [
            {
                path: 'dashboard',
                canActivate: [AuthGuard],
                loadChildren: () =>
                    import('../pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
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
