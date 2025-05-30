import { Routes } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FormsComponent } from './modules/forms/forms.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'forms', component: FormsComponent },
      { path: '**', redirectTo: 'dashboard' },
    ],
  },
];
