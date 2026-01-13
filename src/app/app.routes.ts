import { Routes } from '@angular/router';
import MaterialDemo from './material-demo/material-demo';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MaterialDemo,
  },
];
