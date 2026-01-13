import { Routes } from '@angular/router';
import { Home } from './home/home';
import MaterialDemo from './material-demo/material-demo';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Home,
  },
  {
    path: 'material',
    component: MaterialDemo,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
