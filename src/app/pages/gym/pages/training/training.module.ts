import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from '@app/store/utils/utils.module';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { WatchYoutubeService } from './service/watch-youtube.service';
import { SetEditorComponent } from './set-editor/set-editor.component';
import { TrainingCardComponent } from './training-card/training-card.component';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingPageRoutingModule } from './training-routing.module';
import { TrainingPage } from './training.page';
import { WatchVideoModalComponent } from './watch-video-modal/watch-video-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TrainingPageRoutingModule,
    UiModule,
    UtilsModule
  ],
  providers: [WatchYoutubeService, ScreenOrientation],
  declarations: [TrainingPage, WatchVideoModalComponent, TrainingListComponent, TrainingCardComponent, SetEditorComponent],
  entryComponents: [WatchVideoModalComponent]
})
export class TrainingPageModule {}
