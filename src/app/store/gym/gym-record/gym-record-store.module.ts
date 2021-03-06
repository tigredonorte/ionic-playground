import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UtilsModule } from '@app/store/utils/utils.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { GymRecordEffects } from './gym-record.effects';
import { reducer } from './gym-record.reducer';
import { key } from './gym-record.state';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(key, reducer),
    EffectsModule.forFeature([GymRecordEffects]),
    UtilsModule
  ],
  providers: [GymRecordEffects],
})
export class GymRecordStoreModule {}
