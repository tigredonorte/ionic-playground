import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Camera } from '@ionic-native/camera/ngx';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { PhotoPageRoutingModule } from './photo-routing.module';
import { PhotoPage } from './photo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoPageRoutingModule,
    UiModule
  ],
  providers: [Camera],
  declarations: [PhotoPage]
})
export class PhotoPageModule {}
