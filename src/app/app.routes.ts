import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'reservas',
    loadComponent: () => import('./pages/reservas/reservas.page').then( m => m.ReservasPage)
  },
  {
    path: 'pedidos',
    loadComponent: () => import('./pages/pedidos/pedidos.page').then( m => m.PedidosPage)
  },
];
