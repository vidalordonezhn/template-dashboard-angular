import { Routes } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FormsComponent } from './modules/forms/forms.component';
import { FeaturexComponent } from './modules/featurex/featurex.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'featurex', component: FeaturexComponent },
      { path: '**', redirectTo: 'dashboard' },
    ],
  },
];
