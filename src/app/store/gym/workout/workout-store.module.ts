import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { WorkoutEffects } from './workout.effects';
import { reducer } from './workout.reducer';
import { WorkoutService } from './workout.service';
import { key } from './workout.state';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(key, reducer),
    EffectsModule.forFeature([WorkoutEffects]),
  ],
  providers: [WorkoutEffects, WorkoutService],
})
export class WorkoutStoreModule {}
