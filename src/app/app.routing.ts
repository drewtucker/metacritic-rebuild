import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { AdminComponent } from './admin/admin.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';

const appRoutes: Routes = [
{
  path: 'entries',
  component: EntryListComponent
},
{
  path: 'reports',
  component: ReportsComponent
},
{
  path: 'admin',
  component: AdminComponent
},
{
  path: 'details/:id',
  component: EntryDetailsComponent
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
