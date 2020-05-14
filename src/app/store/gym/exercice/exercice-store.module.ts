import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UtilsModule } from '@app/store/utils/utils.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ExerciceEffects } from './exercice.effects';
import { reducer } from './exercice.reducer';
import { key } from './exercice.state';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(key, reducer),
    EffectsModule.forFeature([ExerciceEffects]),
    UtilsModule
  ],
  providers: [ExerciceEffects],
})
export class ExerciceStoreModule {}
