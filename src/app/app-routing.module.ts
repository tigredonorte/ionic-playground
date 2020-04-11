import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data: {
      title: 'Home',
      icon: 'mail'
    }
  },
  {
    path: 'navegacao',
    data: {
      title: 'Navegação',
      icon: 'paper-plane'
    },
    loadChildren: () => import('./pages/navegacao/navegacao.module').then( m => m.NavegacaoPageModule)
  },
  {
    path: 'navegacao2',
    loadChildren: () => import('./pages/navegacao2/navegacao2.module').then( m => m.Navegacao2PageModule)
  },
  {
    path: 'buttons',
    data: {
      title: 'Botões',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/buttons/buttons.module').then( m => m.ButtonsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'alert',
    data: {
      title: 'Alert',
      icon: 'alert'
    },
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
