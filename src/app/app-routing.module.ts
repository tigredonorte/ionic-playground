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
  },
  {
    path: 'action-sheet',
    data: {
      title: 'Action sheet',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'badge',
    data: {
      title: 'Badge',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'card',
    data: {
      title: 'Card',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'checkbox',
    data: {
      title: 'Checkbox',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/checkbox/checkbox.module').then( m => m.CheckboxPageModule)
  },
  {
    path: 'chip',
    data: {
      title: 'Chip',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/chip/chip.module').then( m => m.ChipPageModule)
  },
  {
    path: 'content',
    data: {
      title: 'Content',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/content/content.module').then( m => m.ContentPageModule)
  },
  {
    path: 'datetime',
    data: {
      title: 'Date Time',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/datetime/datetime.module').then( m => m.DatetimePageModule)
  },
  {
    path: 'fab',
    data: {
      title: 'Float Action Button',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/fab/fab.module').then( m => m.FabPageModule)
  },
  {
    path: 'grid',
    data: {
      title: 'Grid',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'infinite-scroll',
    data: {
      title: 'Infinite Scroll',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
