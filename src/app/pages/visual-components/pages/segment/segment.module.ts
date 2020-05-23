import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { SegmentPageRoutingModule } from './segment-routing.module';
import { SegmentPage } from './segment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentPageRoutingModule,
    UiModule
  ],
  declarations: [SegmentPage]
})
export class SegmentPageModule {}
