import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CardPageRoutingModule } from './card-routing.module';
import { CardPage } from './card.page';

// import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardPageRoutingModule,
    // YoutubeVideoPlayer
  ],
  declarations: [CardPage]
})
export class CardPageModule {}
