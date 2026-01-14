import { Routes } from '@angular/router';
import { provideStates } from '@ngxs/store';
import { Home } from './home/home';
import MaterialDemo from './material-demo/material-demo';
import { NgxsTodo } from './ngxs-todo/ngxs-todo';
import { TodoState } from './ngxs-todo/todo/todo.state';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Home,
  },
  {
    path: 'ngxs',
    component: NgxsTodo,
    providers: [provideStates([TodoState])],
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
