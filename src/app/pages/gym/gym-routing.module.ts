import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GymPage } from './gym.page';

const routes: Routes = [
  {
    path: '',
    component: GymPage
  },
  {
    path: 'training/:workoutCode/:title',
    loadChildren: () => import('./pages/training/training.module').then( m => m.TrainingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymPageRoutingModule {}
