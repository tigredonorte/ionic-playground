import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    data: {
      title: 'Visual Components',
      icon: 'construct',
    },
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
  }
];
