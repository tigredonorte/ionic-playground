import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    data: {
      title: 'Home',
      icon: 'home'
    },
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'visual-components',
    data: {
      title: 'Componentes Visuais',
      icon: 'home'
    },
    loadChildren: () => import('./pages/visual-components/visual-components.module').then( m => m.VisualComponentsPageModule)
  },
  {
    path: 'gym',
    data: {
      title: 'Academia',
      icon: 'home'
    },
    loadChildren: () => import('./pages/gym/gym.module').then( m => m.GymPageModule)
  },
  {
    path: 'native-components',
    data: {
      title: 'Componentes Nativos',
      icon: 'home'
    },
    loadChildren: () => import('./pages/native-components/native-components.module').then( m => m.NativeComponentsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
