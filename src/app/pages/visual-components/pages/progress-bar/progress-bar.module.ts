import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { ProgressBarPageRoutingModule } from './progress-bar-routing.module';
import { ProgressBarPage } from './progress-bar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressBarPageRoutingModule,
    UiModule
  ],
  declarations: [ProgressBarPage]
})
export class ProgressBarPageModule {}
