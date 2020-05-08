import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GymPage } from './gym.page';

const routes: Routes = [
  {
    path: '',
    component: GymPage
  },
  {
    path: 'week/:weekName',
    loadChildren: () => import('./pages/week/week.module').then( m => m.WeekPageModule)
  },
  {
    path: 'training/:weekName/:title',
    loadChildren: () => import('./pages/training/training.module').then( m => m.TrainingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymPageRoutingModule {}
