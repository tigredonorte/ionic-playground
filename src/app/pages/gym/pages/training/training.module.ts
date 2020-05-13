import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { WatchYoutubeService } from './service/watch-youtube.service';
import { TrainingCardComponent } from './training-card/training-card.component';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingPageRoutingModule } from './training-routing.module';
import { TrainingPage } from './training.page';
import { WatchVideoModalComponent } from './watch-video-modal/watch-video-modal.component';
import { UtilsModule } from '@app/store/utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingPageRoutingModule,
    UiModule,
    UtilsModule
  ],
  providers: [WatchYoutubeService, ScreenOrientation],
  declarations: [TrainingPage, WatchVideoModalComponent, TrainingListComponent, TrainingCardComponent],
  entryComponents: [WatchVideoModalComponent]
})
export class TrainingPageModule {}
