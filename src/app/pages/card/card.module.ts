import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { CardPageRoutingModule } from './card-routing.module';
import { CardPage } from './card.page';

// import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardPageRoutingModule,
    UiModule
    // YoutubeVideoPlayer
  ],
  declarations: [CardPage]
})
export class CardPageModule {}
