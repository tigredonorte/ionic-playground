import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { TrainingPageRoutingModule } from './training-routing.module';
import { TrainingPage } from './training.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingPageRoutingModule,
    UiModule
  ],
  providers: [YoutubeVideoPlayer],
  declarations: [TrainingPage]
})
export class TrainingPageModule {}
