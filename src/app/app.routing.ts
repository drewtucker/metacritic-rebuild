import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
{
  path: 'reports',
  component: ReportsComponent
},
{
  path: 'admin',
  component: AdminComponent
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
