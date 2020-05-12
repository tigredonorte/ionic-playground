import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { WorkoutStoreModule } from './gym/workout/workout-store.module';
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
    WorkoutStoreModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ]
})
export class AppStoreModule {}
