import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'manager-dash',
    loadComponent: () => import('./manager-dash/manager-dash.page').then( m => m.ManagerDashPage)
  },
  {
    path: 'client-home',
    loadComponent: () => import('./client-home/client-home.page').then( m => m.ClientHomePage)
  },
];
