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
  },
  {
    path: 'input',
    data: {
      title: 'Input',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'list',
    data: {
      title: 'List',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'progress-bar',
    data: {
      title: 'Progress Bar',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/progress-bar/progress-bar.module').then( m => m.ProgressBarPageModule)
  },
  {
    path: 'refresh',
    data: {
      title: 'Refresh',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/refresh/refresh.module').then( m => m.RefreshPageModule)
  },
  {
    path: 'reorder',
    data: {
      title: 'Reorder',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/reorder/reorder.module').then( m => m.ReorderPageModule)
  },
  {
    path: 'select',
    data: {
      title: 'Select',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: 'toggle',
    data: {
      title: 'Toggle',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/toggle/toggle.module').then( m => m.TogglePageModule)
  },
  {
    path: 'search-bar',
    data: {
      title: 'Sarch bar',
      icon: 'search'
    },
    loadChildren: () => import('./pages/search-bar/search-bar.module').then( m => m.SearchBarPageModule)
  },
  {
    path: 'segment',
    data: {
      title: 'Segment',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/segment/segment.module').then( m => m.SegmentPageModule)
  },
  {
    path: 'slides',
    data: {
      title: 'Slides',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/slides/slides.module').then( m => m.SlidesPageModule)
  },
  {
    path: 'toast',
    data: {
      title: 'Toast',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/toast/toast.module').then( m => m.ToastPageModule)
  },
  {
    path: 'modal',
    data: {
      title: 'Modal',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'popover',
    data: {
      title: 'Popover',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'radio',
    data: {
      title: 'Radio',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/radio/radio.module').then( m => m.RadioPageModule)
  },
  {
    path: 'animacao',
    data: {
      title: 'Animação',
      icon: 'construct'
    },
    loadChildren: () => import('./pages/animacao/animacao.module').then( m => m.AnimacaoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
