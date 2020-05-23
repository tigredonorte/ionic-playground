import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { ExerciceStoreModule } from './gym/exercice/exercice-store.module';
import { GymRecordStoreModule } from './gym/gym-record';
import { VideoStoreModule } from './gym/video';
import { WorkoutStoreModule } from './gym/workout';
import { clearState } from './login/logout/logout.state';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {
      metaReducers: [clearState],
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    ExerciceStoreModule,
    WorkoutStoreModule,
    VideoStoreModule,
    GymRecordStoreModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ]
})
export class AppStoreModule {}
