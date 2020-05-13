import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UtilsModule } from '@app/store/utils/utils.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { VideoEffects } from './video.effects';
import { reducer } from './video.reducer';
import { key } from './video.state';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(key, reducer),
    EffectsModule.forFeature([VideoEffects]),
    UtilsModule
  ],
  providers: [VideoEffects],
})
export class VideoStoreModule {}
