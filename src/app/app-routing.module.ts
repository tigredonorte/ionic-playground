import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'gym',
    pathMatch: 'full'
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
    path: 'visual-components',
    data: {
      title: 'Componentes Visuais',
      icon: 'home'
    },
    loadChildren: () => import('./pages/visual-components/visual-components.module').then( m => m.VisualComponentsPageModule)
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
